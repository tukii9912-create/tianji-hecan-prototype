const zodiac = [
  "白羊座",
  "金牛座",
  "双子座",
  "巨蟹座",
  "狮子座",
  "处女座",
  "天秤座",
  "天蝎座",
  "射手座",
  "摩羯座",
  "水瓶座",
  "双鱼座",
];

const vedicSigns = [
  "Mesha 白羊",
  "Vrishabha 金牛",
  "Mithuna 双子",
  "Karka 巨蟹",
  "Simha 狮子",
  "Kanya 处女",
  "Tula 天秤",
  "Vrischika 天蝎",
  "Dhanu 射手",
  "Makara 摩羯",
  "Kumbha 水瓶",
  "Meena 双鱼",
];

const nakshatras = [
  "Ashwini 阿什维尼",
  "Bharani 巴拉尼",
  "Krittika 昴宿",
  "Rohini 罗希尼",
  "Mrigashirsha 鹿首",
  "Ardra 阿尔德拉",
  "Punarvasu 再宿",
  "Pushya 鬼宿",
  "Ashlesha 柳宿",
  "Magha 轩辕",
  "Purva Phalguni 前翼",
  "Uttara Phalguni 后翼",
  "Hasta 手宿",
  "Chitra 角宿",
  "Swati 亢宿",
  "Vishakha 氐宿",
  "Anuradha 房宿",
  "Jyeshtha 心宿",
  "Mula 箕宿",
  "Purva Ashadha 前斗",
  "Uttara Ashadha 后斗",
  "Shravana 牛宿",
  "Dhanishta 虚宿",
  "Shatabhisha 危宿",
  "Purva Bhadrapada 前室",
  "Uttara Bhadrapada 后室",
  "Revati 奎宿",
];

const dashaLords = [
  { name: "计都 Ketu", years: 7 },
  { name: "金星 Shukra", years: 20 },
  { name: "太阳 Surya", years: 6 },
  { name: "月亮 Chandra", years: 10 },
  { name: "火星 Mangala", years: 7 },
  { name: "罗睺 Rahu", years: 18 },
  { name: "木星 Guru", years: 16 },
  { name: "土星 Shani", years: 19 },
  { name: "水星 Budha", years: 17 },
];

const trigrams = [
  { name: "乾", symbol: "☰", nature: "天", virtue: "刚健", lines: [1, 1, 1] },
  { name: "兑", symbol: "☱", nature: "泽", virtue: "悦纳", lines: [1, 1, 0] },
  { name: "离", symbol: "☲", nature: "火", virtue: "明辨", lines: [1, 0, 1] },
  { name: "震", symbol: "☳", nature: "雷", virtue: "发动", lines: [1, 0, 0] },
  { name: "巽", symbol: "☴", nature: "风", virtue: "入微", lines: [0, 1, 1] },
  { name: "坎", symbol: "☵", nature: "水", virtue: "险中求通", lines: [0, 1, 0] },
  { name: "艮", symbol: "☶", nature: "山", virtue: "止定", lines: [0, 0, 1] },
  { name: "坤", symbol: "☷", nature: "地", virtue: "承载", lines: [0, 0, 0] },
];

const hexagrams = [
  "乾为天",
  "坤为地",
  "水雷屯",
  "山水蒙",
  "水天需",
  "天水讼",
  "地水师",
  "水地比",
  "风天小畜",
  "天泽履",
  "地天泰",
  "天地否",
  "天火同人",
  "火天大有",
  "地山谦",
  "雷地豫",
  "泽雷随",
  "山风蛊",
  "地泽临",
  "风地观",
  "火雷噬嗑",
  "山火贲",
  "山地剥",
  "地雷复",
  "天雷无妄",
  "山天大畜",
  "山雷颐",
  "泽风大过",
  "坎为水",
  "离为火",
  "泽山咸",
  "雷风恒",
  "天山遁",
  "雷天大壮",
  "火地晋",
  "地火明夷",
  "风火家人",
  "火泽睽",
  "水山蹇",
  "雷水解",
  "山泽损",
  "风雷益",
  "泽天夬",
  "天风姤",
  "泽地萃",
  "地风升",
  "泽水困",
  "水风井",
  "泽火革",
  "火风鼎",
  "震为雷",
  "艮为山",
  "风山渐",
  "雷泽归妹",
  "雷火丰",
  "火山旅",
  "巽为风",
  "兑为泽",
  "风水涣",
  "水泽节",
  "风泽中孚",
  "雷山小过",
  "水火既济",
  "火水未济",
];

const places = [
  { name: "广东省", lat: 23.1291, lon: 113.2644, tz: 8 },
  { name: "深圳", lat: 22.5431, lon: 114.0579, tz: 8 },
  { name: "北京", lat: 39.9042, lon: 116.4074, tz: 8 },
  { name: "上海", lat: 31.2304, lon: 121.4737, tz: 8 },
  { name: "香港", lat: 22.3193, lon: 114.1694, tz: 8 },
  { name: "台北", lat: 25.033, lon: 121.5654, tz: 8 },
  { name: "新加坡", lat: 1.3521, lon: 103.8198, tz: 8 },
  { name: "洛杉矶", lat: 34.0522, lon: -118.2437, tz: -8 },
  { name: "纽约", lat: 40.7128, lon: -74.006, tz: -5 },
  { name: "伦敦", lat: 51.5072, lon: -0.1276, tz: 0 },
];

const modeCopy = {
  natal: "本命盘",
  iching: "起卦",
  synastry: "合盘",
  transit: "流年",
};

const state = {
  mode: "natal",
  lastReading: "",
  installPrompt: null,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function normalizeAngle(value) {
  return ((value % 360) + 360) % 360;
}

function degToRad(value) {
  return (value * Math.PI) / 180;
}

function radToDeg(value) {
  return (value * 180) / Math.PI;
}

function getYearFraction(date) {
  const year = date.getUTCFullYear();
  const start = Date.UTC(year, 0, 1);
  const end = Date.UTC(year + 1, 0, 1);
  return year + (date.getTime() - start) / (end - start);
}

function julianDate(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

function ayanamsa(year) {
  return 23.85675 + 0.013969 * (year - 2000);
}

function sunLongitude(jd) {
  const d = jd - 2451545.0;
  const g = degToRad(normalizeAngle(357.529 + 0.98560028 * d));
  const q = normalizeAngle(280.459 + 0.98564736 * d);
  return normalizeAngle(q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g));
}

function moonLongitude(jd) {
  const d = jd - 2451545.0;
  const l0 = normalizeAngle(218.316 + 13.176396 * d);
  const mm = degToRad(normalizeAngle(134.963 + 13.064993 * d));
  const ms = degToRad(normalizeAngle(357.529 + 0.98560028 * d));
  const elong = degToRad(normalizeAngle(297.85 + 12.190749 * d));
  const f = degToRad(normalizeAngle(93.272 + 13.22935 * d));

  return normalizeAngle(
    l0 +
      6.289 * Math.sin(mm) +
      1.274 * Math.sin(2 * elong - mm) +
      0.658 * Math.sin(2 * elong) +
      0.214 * Math.sin(2 * mm) -
      0.186 * Math.sin(ms) -
      0.114 * Math.sin(2 * f),
  );
}

function ascendantLongitude(jd, lon, lat) {
  const d = jd - 2451545.0;
  const gmst = normalizeAngle((18.697374558 + 24.06570982441908 * d) * 15);
  const theta = degToRad(normalizeAngle(gmst + lon));
  const eps = degToRad(23.439291 - 0.0130042 * (d / 36525));
  const phi = degToRad(lat);
  const raw = radToDeg(
    Math.atan2(
      -Math.cos(theta),
      Math.sin(theta) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps),
    ),
  );
  return normalizeAngle(raw + 180);
}

function signName(longitude, list = zodiac) {
  return list[Math.floor(normalizeAngle(longitude) / 30)];
}

function signDegree(longitude) {
  return normalizeAngle(longitude) % 30;
}

function resolvePlace(input) {
  const value = input.trim();
  return places.find((place) => value.includes(place.name) || place.name.includes(value)) || places[0];
}

function parseBirth() {
  const dateValue = $("#birthDate").value || "1986-09-21";
  const timeValue = $("#birthTime").value || "23:45";
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hour, minute] = timeValue.split(":").map(Number);
  const place = resolvePlace($("#birthPlace").value);
  const utc = new Date(Date.UTC(year, month - 1, day, hour - place.tz, minute || 0));

  return {
    localDate: dateValue,
    localTime: timeValue,
    year,
    place,
    utc,
    display: `${dateValue} ${timeValue}`,
  };
}

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function buildHexagram(seed) {
  const upper = trigrams[Math.floor(seed / 64) % 8];
  const lower = trigrams[Math.floor(seed / 512) % 8];
  const lines = [...lower.lines, ...upper.lines];
  const firstMoving = (seed % 6) + 1;
  const secondMoving = (Math.floor(seed / 11) % 6) + 1;
  const moving = [...new Set([firstMoving, secondMoving])].sort((a, b) => a - b);
  const index = seed % 64;
  const changedIndex = moving.reduce((acc, line) => acc ^ (1 << (line - 1)), index);
  const themes = [
    "开创、决断、时机",
    "承载、蓄势、等待",
    "险中求通、先难后成",
    "明辨、曝光、秩序",
    "关系张力、资源流动",
    "止定、复盘、守边界",
    "发动、突围、震荡",
    "入微、渗透、长期主义",
  ];

  return {
    name: hexagrams[index],
    changedName: hexagrams[changedIndex % 64],
    upper,
    lower,
    lines,
    moving,
    theme: themes[(index + trigrams.indexOf(upper) + trigrams.indexOf(lower)) % themes.length],
  };
}

function calculateDasha(birth, siderealMoonLongitude) {
  const span = 360 / 27;
  const nakIndex = Math.floor(siderealMoonLongitude / span);
  const nakProgress = (siderealMoonLongitude % span) / span;
  const birthYear = getYearFraction(birth.utc);
  const nowYear = getYearFraction(new Date());
  let lordIndex = nakIndex % 9;
  let start = birthYear;
  let duration = dashaLords[lordIndex].years * (1 - nakProgress);
  const periods = [];

  for (let i = 0; i < 18; i += 1) {
    const lord = dashaLords[lordIndex % dashaLords.length];
    const end = start + duration;
    periods.push({ lord, start, end });
    if (nowYear >= start && nowYear < end) {
      return {
        current: { lord, start, end },
        next: periods[periods.length - 1],
        nakIndex,
        nakProgress,
      };
    }
    start = end;
    lordIndex += 1;
    duration = dashaLords[lordIndex % dashaLords.length].years;
  }

  return {
    current: periods[periods.length - 1],
    next: null,
    nakIndex,
    nakProgress,
  };
}

function calculateAstrology(birth) {
  const jd = julianDate(birth.utc);
  const tropicalSun = sunLongitude(jd);
  const tropicalMoon = moonLongitude(jd);
  const tropicalAsc = ascendantLongitude(jd, birth.place.lon, birth.place.lat);
  const aya = ayanamsa(birth.year);
  const siderealMoon = normalizeAngle(tropicalMoon - aya);
  const siderealSun = normalizeAngle(tropicalSun - aya);
  const siderealAsc = normalizeAngle(tropicalAsc - aya);
  const span = 360 / 27;
  const nakIndex = Math.floor(siderealMoon / span);
  const dasha = calculateDasha(birth, siderealMoon);

  return {
    jd,
    tropicalSun,
    tropicalMoon,
    tropicalAsc,
    siderealSun,
    siderealMoon,
    siderealAsc,
    western: {
      sun: signName(tropicalSun),
      moon: signName(tropicalMoon),
      asc: signName(tropicalAsc),
    },
    vedic: {
      sun: signName(siderealSun, vedicSigns),
      moon: signName(siderealMoon, vedicSigns),
      asc: signName(siderealAsc, vedicSigns),
      nakshatra: nakshatras[nakIndex],
      nakDegree: signDegree(siderealMoon).toFixed(1),
      dasha,
    },
  };
}

function movingLineText(lines) {
  const names = ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];
  return `${lines.map((line) => names[line - 1]).join("、")}动`;
}

function formatYear(value) {
  return String(Math.round(value));
}

function renderHexLines(hex) {
  const moving = new Set(hex.moving);
  $("#hexLines").innerHTML = hex.lines
    .map((line, index) => ({ line, number: index + 1 }))
    .reverse()
    .map(({ line, number }) => {
      const type = line ? "yang" : "yin";
      const moveClass = moving.has(number) ? " moving" : "";
      if (type === "yang") {
        return `<div class="hex-line yang${moveClass}" aria-hidden="true"><span></span></div>`;
      }
      return `<div class="hex-line yin${moveClass}" aria-hidden="true"></div>`;
    })
    .join("");
}

function topicAdvice(topic, mode) {
  if (topic.includes("财富")) {
    return "财务问题宜用“阶段仓位”而非一次押注处理。可把机会分成试探、确认、放大三段，先守现金流，再谈加速。";
  }
  if (topic.includes("感情")) {
    return "关系的重点不是立刻求确定答案，而是校验彼此节奏。先看承诺是否能落入日常行动，再讨论更大的契约。";
  }
  if (topic.includes("年度") || mode === "transit") {
    return "流年宜看节律：上半年清障，下半年放量。把重大决定放在信息更完整的窗口，会比靠情绪冲刺更稳。";
  }
  if (topic.includes("自我")) {
    return "自我定位宜回到可重复的能力，不必被一时反馈牵着走。找到你能长期输出的那条线，就是当下的正位。";
  }
  return "事业与关系同时被牵动时，不宜只靠热度推进。先定边界与优先级，再让行动验证人心与资源是否同频。";
}

function styleTone(style) {
  const tones = {
    classical: {
      opening: "以古典合参法观之",
      advice: "宜取其势，不宜逆其时。",
    },
    gentle: {
      opening: "从陪伴式解读来看",
      advice: "先照顾好自己的节奏，答案会在行动里慢慢变清楚。",
    },
    strategic: {
      opening: "若按决策盘拆解",
      advice: "把情绪判断转成可验证节点，胜率会明显上升。",
    },
  };
  return tones[style] || tones.classical;
}

function createReport(input, astrology, hex) {
  const tone = styleTone(input.style);
  const dasha = astrology.vedic.dasha.current;
  const dashaName = dasha.lord.name.split(" ")[0];
  const question = input.question.trim();
  const depthText = input.depth > 2 ? "深盘" : "快盘";
  const intro = `${tone.opening}，此${input.gender}命以${astrology.vedic.asc}为吠陀上升，以${astrology.western.sun}太阳与${astrology.western.moon}月亮构成外显与内驱；本卦得「${hex.name}」，变卦趋向「${hex.changedName}」。此盘不是静守之象，而是以信息、时机与行动次序来打开局面。`;
  const sections = [
    {
      title: "易经卦象",
      icon: "hex",
      body: `本卦「${hex.name}」，${hex.upper.name}上${hex.lower.name}下，主轴为“${hex.upper.virtue}遇${hex.lower.virtue}”。${movingLineText(hex.moving)}，说明事情的关键不在表面结果，而在中途转折与动爻触发点。问「${question || input.topic}」时，可先取一件最重要的事推进，避免多线同时耗气。`,
    },
    {
      title: "吠陀参数",
      icon: "vedic",
      body: `按 BPHS 风格参数口径，Lagna 约落${astrology.vedic.asc}，Chandra 约落${astrology.vedic.moon} ${astrology.vedic.nakDegree}°，Nakshatra 为${astrology.vedic.nakshatra}。当前 Vimshottari 近似为${dashaName}大运（约 ${formatYear(dasha.start)}-${formatYear(dasha.end)}），其象为竞争、执行、收益与冲突并行。`,
    },
    {
      title: "西占骨架",
      icon: "western",
      body: `西方骨架显示太阳${astrology.western.sun}、月亮${astrology.western.moon}、上升${astrology.western.asc}。太阳给出做事方法，月亮给出反应速度，上升决定外界如何接收你。三者合看，最怕的是聪明但分散，最强的是迅速看见结构后立刻切入。`,
    },
    {
      title: "当下建议",
      icon: "advice",
      body: `${depthText}结论：${topicAdvice(input.topic, state.mode)} ${tone.advice}`,
    },
  ];

  return { intro, sections };
}

function iconSvg(type) {
  const icons = {
    hex: '<path d="M5 7h14M5 12h6m2 0h6M5 17h14" />',
    vedic: '<circle cx="12" cy="12" r="8" /><path d="M12 4v16M4 12h16M7.8 7.8l8.4 8.4M16.2 7.8l-8.4 8.4" />',
    western: '<path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="5" />',
    advice: '<path d="M12 3 4 14h7l-1 7 9-12h-7z" />',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[type]}</svg>`;
}

function getInput() {
  return {
    gender: $("#gender").value,
    topic: $("#topic").value,
    question: $("#question").value,
    style: $("#readingStyle").value,
    depth: Number($("#depth").value),
  };
}

function updateDepthLabel() {
  const labels = ["简读", "标准", "深度", "报告"];
  $("#depthLabel").textContent = labels[Number($("#depth").value) - 1];
}

function updateReading() {
  updateDepthLabel();
  const birth = parseBirth();
  const input = getInput();
  const seedText = `${birth.display}|${birth.place.name}|${input.gender}|${input.topic}|${input.question}|${state.mode}`;
  const seed = hashString(seedText);
  const hex = buildHexagram(seed);
  const astrology = calculateAstrology(birth);
  const report = createReport(input, astrology, hex);
  const dasha = astrology.vedic.dasha.current;
  const dashaShort = dasha.lord.name.split(" ")[0];
  const day = buildHexagram(hashString(new Date().toISOString().slice(0, 10) + birth.place.name));

  $("#hexName").textContent = hex.name;
  $("#changingLines").textContent = `${movingLineText(hex.moving)} · 变「${hex.changedName}」`;
  $("#trigramPair").textContent = `${hex.upper.name}上 · ${hex.lower.name}下`;
  $("#hexTheme").textContent = hex.theme;
  $("#vedicAsc").textContent = astrology.vedic.asc;
  $("#nakshatra").textContent = `Nakshatra: ${astrology.vedic.nakshatra}`;
  $("#westernCore").textContent = `太阳${astrology.western.sun} · 月亮${astrology.western.moon}`;
  $("#westernAsc").textContent = `上升${astrology.western.asc}`;
  $("#currentDasha").textContent = `${dashaShort}大运`;
  $("#dashaRange").textContent = `${formatYear(dasha.start)} - ${formatYear(dasha.end)}`;
  $("#phaseBirth").textContent = birth.display;
  $("#phaseZone").textContent = `UTC${birth.place.tz >= 0 ? "+" : ""}${birth.place.tz} · ${birth.place.name}`;
  $("#dayOracle").textContent = `${day.lower.virtue} · ${day.lower.nature}${day.upper.nature}`;
  $("#readingIntro").textContent = report.intro;
  $("#reportSections").innerHTML = report.sections
    .map(
      (section) => `
      <article class="report-section">
        <h3>${iconSvg(section.icon)}${section.title}</h3>
        <p>${section.body}</p>
      </article>
    `,
    )
    .join("");
  $("#statusDasha").textContent = `${dashaShort}大运 ${formatYear(dasha.start)}-${formatYear(dasha.end)}`;
  $("#statusOracle").textContent = `${day.name} · ${day.lower.nature}${day.upper.nature}`;
  $("#statusSeed").textContent = String(seed).slice(0, 10);
  renderHexLines(hex);

  state.lastReading = [
    `天机合参 · ${modeCopy[state.mode]}`,
    `命主：${input.gender}｜${birth.display}｜${birth.place.name}`,
    `主题：${input.topic}`,
    "",
    report.intro,
    "",
    ...report.sections.map((section) => `【${section.title}】\n${section.body}`),
  ].join("\n");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

async function copyReport() {
  try {
    await navigator.clipboard.writeText(state.lastReading);
    showToast("报告已复制");
  } catch (error) {
    showToast("当前浏览器不允许直接复制，可手动选中报告文本");
  }
}

function getCases() {
  try {
    return JSON.parse(localStorage.getItem("tianji-cases") || "[]");
  } catch {
    return [];
  }
}

function saveCase() {
  const birth = parseBirth();
  const cases = getCases();
  cases.unshift({
    id: Date.now(),
    title: `${$("#topic").value} · ${birth.display}`,
    place: birth.place.name,
    report: state.lastReading,
    savedAt: new Date().toLocaleString("zh-CN"),
  });
  localStorage.setItem("tianji-cases", JSON.stringify(cases.slice(0, 8)));
  showToast("案例已保存到本机");
}

function renderCaseList() {
  const cases = getCases();
  $("#caseList").innerHTML = cases.length
    ? cases
        .map(
          (item) => `
        <article class="case-item">
          <strong>${item.title}</strong>
          <p>${item.place}｜${item.savedAt}</p>
        </article>
      `,
        )
        .join("")
    : '<article class="case-item"><strong>暂无保存案例</strong><p>完成一次合参推演后，点击保存案例即可在这里看到记录。</p></article>';
}

function resetDemo() {
  $("#gender").value = "男";
  $("#topic").value = "事业与关系";
  $("#birthDate").value = "1986-09-21";
  $("#birthTime").value = "23:45";
  $("#birthPlace").value = "广东省";
  $("#question").value = "当前阶段事业扩张与亲密关系如何互相影响？";
  $("#readingStyle").value = "classical";
  $("#depth").value = "3";
  state.mode = "natal";
  $$(".mode").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  updateReading();
  showToast("已恢复示例命盘");
}

function attachEvents() {
  $("#calcForm").addEventListener("submit", (event) => {
    event.preventDefault();
    updateReading();
    showToast(`${modeCopy[state.mode]}已完成`);
  });

  ["gender", "topic", "birthDate", "birthTime", "birthPlace", "question", "readingStyle", "depth"].forEach(
    (id) => {
      $(`#${id}`).addEventListener("input", updateReading);
    },
  );

  $$(".mode").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      $$(".mode").forEach((item) => item.classList.toggle("is-active", item === button));
      updateReading();
    });
  });

  $("#copyReport").addEventListener("click", copyReport);
  $("#copyTop").addEventListener("click", copyReport);
  $("#saveCase").addEventListener("click", saveCase);
  $("#saveTop").addEventListener("click", saveCase);
  $("#resetDemo").addEventListener("click", resetDemo);
  $("#libraryNav").addEventListener("click", () => {
    renderCaseList();
    $("#caseDialog").showModal();
  });
  $("#methodNav").addEventListener("click", () => {
    $("#methodDialog").showModal();
  });
  $("#installHint").addEventListener("click", async () => {
    if (state.installPrompt) {
      state.installPrompt.prompt();
      state.installPrompt = null;
    } else {
      showToast("可在浏览器菜单中选择“添加到桌面”");
    }
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.installPrompt = event;
  });
}

function bootPwa() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

attachEvents();
updateReading();
bootPwa();
