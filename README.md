# 天机合参 原型

这是一个 H5/PWA 原型，融合易经起卦、吠陀占星参数和西方占星骨架，并预留 MiniMax AI 深度报告接口。

## 打开方式

直接打开 `index.html` 可以体验本地规则报告。若要体验 MiniMax AI 深盘，请使用本地 Node 服务或部署到支持 serverless API 的平台。

```powershell
Copy-Item .env.example .env.local
# 在 .env.local 中填写 MINIMAX_API_KEY
npm run dev
```

然后打开 `http://localhost:4173`。

## 当前口径

- 易经：按出生资料、地点、主题和问题文本生成起卦种子。
- 西占：用简化天文公式估算太阳、月亮、上升。
- 吠陀：用近似 Lahiri ayanamsa 推算 sidereal sign、Nakshatra 和 Vimshottari Dasha。
- 报告：先生成本地规则报告，再通过 `/api/generate-reading` 调 MiniMax 生成 AI 深盘。

生产版本建议接入高精度星历库、城市地理编码、夏令时校验、内容安全规则和付费报告模板。

## MiniMax 环境变量

- `MINIMAX_API_KEY`：MiniMax API key，只放服务端，不要写入前端代码。
- `MINIMAX_MODEL`：默认 `MiniMax-M2.7`。
- `MINIMAX_BASE_URL`：默认 `https://api.minimax.io/v1`。

GitHub Pages 只能托管静态文件，不能运行 `/api/generate-reading`。要让 MiniMax 真正生效，请部署到 Vercel、Netlify Functions、Cloudflare Workers/Pages Functions 等支持服务端函数的平台。

## Vercel 部署

1. 在 Vercel 导入 GitHub 仓库 `tukii9912-create/tianji-hecan-prototype`。
2. Framework Preset 选择 `Other`。
3. Build Command 留空。
4. Output Directory 留空或使用默认根目录。
5. 在 Environment Variables 填入 `MINIMAX_API_KEY`、`MINIMAX_MODEL`、`MINIMAX_BASE_URL`。
6. 部署完成后打开 Vercel 域名，点击“合参推演”即可调用 MiniMax。
