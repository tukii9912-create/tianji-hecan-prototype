const DEFAULT_MINIMAX_BASE_URL = "https://api.minimax.io/v1";
const DEFAULT_MINIMAX_MODEL = "MiniMax-M2.7";

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error("Request body is too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error("Request body must be valid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
}

function sanitizeText(value, maxLength = 2200) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .slice(0, maxLength);
}

function buildPrompt(payload) {
  const compact = {
    mode: payload.modeLabel,
    input: payload.input,
    birth: payload.birth,
    iching: payload.iching,
    vedic: payload.vedic,
    western: payload.western,
    localReport: payload.localReport,
  };

  return [
    "请基于以下结构化命理参数，生成一份中文 AI 深度报告。",
    "要求：",
    "1. 输出必须是 JSON，不要 markdown，不要代码块。",
    "2. JSON 格式必须是：{\"intro\":\"...\",\"sections\":[{\"title\":\"易经卦象\",\"icon\":\"hex\",\"body\":\"...\"},{\"title\":\"吠陀参数\",\"icon\":\"vedic\",\"body\":\"...\"},{\"title\":\"西占骨架\",\"icon\":\"western\",\"body\":\"...\"},{\"title\":\"当下建议\",\"icon\":\"advice\",\"body\":\"...\"}]}。",
    "3. 风格可参考《Brihat Parashara Hora Shastra》、易经象数、古典占星口吻，但不要声称绝对预言。",
    "4. 结论要具体、像真人顾问，重点回应用户咨询主题。",
    "5. 保持文化娱乐与自我反思定位，不给医疗、法律、投资等高风险决定。",
    `结构化数据：${JSON.stringify(compact)}`,
  ].join("\n");
}

function extractJson(text) {
  const cleaned = sanitizeText(text, 12000)
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .trim();
  const first = cleaned.indexOf("{");
  const last = cleaned.lastIndexOf("}");
  if (first === -1 || last === -1 || last <= first) {
    throw new Error("Model did not return JSON");
  }
  return JSON.parse(cleaned.slice(first, last + 1));
}

function normalizeReport(report, fallback) {
  const fallbackSections = Array.isArray(fallback?.sections) ? fallback.sections : [];
  const sections = Array.isArray(report?.sections) ? report.sections : [];
  const byIndex = ["hex", "vedic", "western", "advice"];

  return {
    intro: sanitizeText(report?.intro || fallback?.intro || "AI 深盘生成完成。", 900),
    sections: byIndex.map((icon, index) => {
      const source = sections[index] || fallbackSections[index] || {};
      return {
        title: sanitizeText(source.title || ["易经卦象", "吠陀参数", "西占骨架", "当下建议"][index], 24),
        icon,
        body: sanitizeText(source.body || "暂无内容。", 1400),
      };
    }),
  };
}

async function callMinimax(payload) {
  const apiKey = process.env.MINIMAX_API_KEY;
  if (!apiKey) {
    return {
      missingKey: true,
      message: "服务端尚未配置 MINIMAX_API_KEY，已保留本地规则报告。",
    };
  }

  const baseUrl = process.env.MINIMAX_BASE_URL || DEFAULT_MINIMAX_BASE_URL;
  const model = process.env.MINIMAX_MODEL || DEFAULT_MINIMAX_MODEL;
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content:
            "你是“天机合参”的中文命理报告生成引擎。你会融合易经、吠陀占星和西方占星，输出克制、具体、可信的文化娱乐型解读。",
        },
        { role: "user", content: buildPrompt(payload) },
      ],
      temperature: 0.72,
      top_p: 0.92,
      max_completion_tokens: 1800,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = data?.error?.message || data?.base_resp?.status_msg || "MiniMax API request failed";
    throw new Error(detail);
  }

  const content = data?.choices?.[0]?.message?.content || data?.choices?.[0]?.messages?.[0]?.text || "";
  const report = normalizeReport(extractJson(content), payload.localReport);
  return { report, model, usage: data.usage };
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return sendJson(res, 204, {});
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, { ok: false, message: "Only POST is supported." });
  }

  try {
    const payload = await readRequestBody(req);
    const result = await callMinimax(payload);

    if (result.missingKey) {
      return sendJson(res, 501, { ok: false, code: "MISSING_MINIMAX_API_KEY", message: result.message });
    }

    return sendJson(res, 200, {
      ok: true,
      provider: "MiniMax",
      model: result.model,
      report: result.report,
      usage: result.usage,
    });
  } catch (error) {
    return sendJson(res, 502, {
      ok: false,
      code: "MINIMAX_GENERATION_FAILED",
      message: `MiniMax 生成失败：${error.message}`,
    });
  }
};
