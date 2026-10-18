import type { Lang } from "./site"

/* 一篇报道 = 这里的一条元数据 + content/<slug>/ 下的 zh.md 和 en.md。
   新增一篇文章只要两步：
     1. 建 src/content/<slug>/zh.md 和 en.md
     2. 在下面的 articles 数组最前面加一条元数据（数组顺序就是页面顺序）
   暂时没有译文时，en.md 可以先不建，页面会显示「译文整理中」。 */

export type Article = {
  /** URL 片段，也是 content/ 下的目录名，只用小写字母和连字符 */
  slug: string
  title: Record<Lang, string>
  /** 发表媒体 */
  outlet: Record<Lang, string>
  /** 发表日期，YYYY-MM-DD，用于排序和展示 */
  date: string
  /** 我在这篇报道里的角色，比如「独立主笔」「参与撰稿」 */
  role: Record<Lang, string>
  /** 一两句话的导读，列表页和文章页顶部都会用 */
  summary: Record<Lang, string>
  /** 封面图，放在 public/images/ 下，写成 "/portfolio/images/xxx.png" */
  cover?: string
  /** 原始发表链接 */
  originalLink?: string
  /** 2-3 个关键词标签：一个大方向 + 一到两个具体领域。列表页和文章页都会显示 */
  topics: Record<Lang, string[]>
}

/* 这个数组的书写顺序无所谓，导出时统一按 date 从新到旧排序。
   新增文章只要填对 date，不用管插在哪一行。 */
const entries: Article[] = [
  {
    slug: "latepost-embodied-ai-q3-2026",
    title: {
      en: "LatePost Embodied AI Quarterly: After Astra, Will General Models Eat Robotics?",
      zh: "晚点具身季报：Astra 冲击后，通用模型会吃掉 Robotics 吗？",
    },
    outlet: { en: "LatePost", zh: "晚点 LatePost" },
    date: "2026-10-15",
    role: {
      en: "Interview editing and writing",
      zh: "参与整理访谈与撰稿",
    },
    summary: {
      en: "A general-purpose multimodal model turned out to be able to do part of a robot policy model's job — and in some tasks, do it better. An interview with Alphaist founding partner Chen Zhe on what that does to the story independent embodied-AI companies have been telling.",
      zh: "通用多模态基础模型居然可以直接做机器人策略模型的部分工作，部分任务的成功率甚至更高。对话 Alphaist 创始合伙人陈哲：这动摇了独立具身智能公司的叙事和估值底座吗？",
    },
    cover: "/portfolio/images/latepost-embodied-q3.png",
    originalLink: "https://mp.weixin.qq.com/s/v8S1zgqh-B5SBzRYqCDPRA",
    topics: {
      en: ["AI", "Embodied AI", "Venture Capital"],
      zh: ["AI", "具身智能", "一级市场"],
    },
  },
  {
    slug: "latepost-ai-q3-2026",
    title: {
      en: "LatePost AI Quarterly: Muse Ignites Personal Assistants, Astra Moves into Robotics, OpenAI's Revenue Surges",
      zh: "晚点 AI 季报：Muse 引爆个人助理，Astra 走进机器人，OpenAI 收入猛增",
    },
    outlet: { en: "LatePost", zh: "晚点 LatePost" },
    date: "2026-09-30",
    role: {
      en: "Interview editing and writing",
      zh: "参与整理访谈与撰稿",
    },
    summary: {
      en: "The quarter's AI review, along two threads: advancing the intelligence frontier, and the diffusion of intelligence. An interview with MoE Capital founding partner Henry Yin on the model race, a serious agent containment failure at OpenAI, and the return of consumer AI.",
      zh: "沿「推进智能前沿」与「智能的扩散」两条脉络回顾本季。对话 MoE Capital 创始合伙人 Henry Yin：模型竞赛、OpenAI 一起严重的 agent 失控事故，以及个人 AI 助理热潮的卷土重来。",
    },
    cover: "/portfolio/images/latepost-ai-q3.png",
    originalLink: "https://mp.weixin.qq.com/s/lS0m51NO_R34RPU9Af1Emg",
    topics: {
      en: ["AI", "Frontier Models", "AI Safety"],
      zh: ["AI", "前沿模型", "AI 安全"],
    },
  },
  {
    slug: "why-foldables",
    title: { en: "Why Foldables?", zh: "为什么是折叠屏？" },
    outlet: { en: "CBN Weekly", zh: "第一财经杂志" },
    date: "2026-09-10",
    role: { en: "Lead writer", zh: "主笔" },
    summary: {
      en: "Huawei, Xiaomi and Apple each launched a foldable flagship within 72 hours, and all three gave it the place in the lineup a slab flagship used to hold. Why memory prices, on-device AI and the fight over the AI entry point all point to the same device.",
      zh: "72 小时内华为、小米、苹果接连发布折叠旗舰，三家都把过去属于直板旗舰的位置给了它。存储涨价、端侧 AI 和对 AI 入口的争夺，为什么都指向同一款设备。",
    },
    cover: "/portfolio/images/why-foldables.png",
    originalLink: "https://mp.weixin.qq.com/s/-fGdHtHCir0PJ-miw9Ox0w",
    topics: {
      en: ["AI", "Consumer Electronics", "On-Device AI"],
      zh: ["AI", "消费电子", "端侧 AI"],
    },
  },
  {
    slug: "ai-out-of-control",
    title: {
      en: "Is AI Really Out of Control — or Is This Just a Scare?",
      zh: "AI 真的失控了？还是这只是一种恐吓？",
    },
    outlet: { en: "CBN Weekly", zh: "第一财经杂志" },
    date: "2026-09-09",
    role: { en: "Lead writer", zh: "主笔" },
    summary: {
      en: "Three days after calling its new model the most aligned ever built, OpenAI's chief scientist published an essay warning that nobody has solved alignment. A close reading of what that essay admits — and of the two breakouts OpenAI's own agents had already carried out.",
      zh: "在把新模型称作「最对齐的模型」三天后，OpenAI 首席科学家发文警告没有一家实验室解决了对齐问题。细读这篇文章承认了什么——以及 OpenAI 自家智能体已经完成的两次越狱。",
    },
    cover: "/portfolio/images/ai-out-of-control.png",
    originalLink: "https://mp.weixin.qq.com/s/GdJL8418A4tQehJlrn8P5g",
    topics: {
      en: ["AI", "AI Safety", "Alignment"],
      zh: ["AI", "AI 安全", "对齐"],
    },
  },
  {
    slug: "ai-hardware-six-trends",
    title: {
      en: "Six Trends from a Year of Nearly 40 AI Devices",
      zh: "盘点了过去一年近 40 款 AI 硬件后，这是我们总结的 6 条新趋势",
    },
    outlet: { en: "CBN Weekly", zh: "第一财经杂志" },
    date: "2026-04-03",
    role: { en: "Lead writer", zh: "主笔" },
    summary: {
      en: "Consumer AI hardware stopped trying to end the smartphone and started filling its dead zones. Six shifts drawn from a year of glasses, earbuds, pendants, rings and recording cards — ending with a business model that sells the service, not the device.",
      zh: "消费级 AI 硬件不再执着于终结智能手机，转而去填手机的真空地带。从一年里的眼镜、耳机、挂坠、戒指和录音卡中总结的 6 条变化——最后落到一个卖服务而不是卖机器的商业模式上。",
    },
    cover: "/portfolio/images/ai-hardware-six-trends.png",
    originalLink: "https://mp.weixin.qq.com/s/srwvM80NxmRWirifkxJHcg",
    topics: {
      en: ["AI", "AI Hardware", "Consumer Trends"],
      zh: ["AI", "AI 硬件", "消费现象"],
    },
  },
  {
    slug: "whos-on-xingye",
    title: {
      en: "Who's on Xingye?",
      zh: "谁在使用星野？",
    },
    outlet: {
      en: "CBN Weekly",
      zh: "第一财经杂志",
    },
    date: "2024-12-18",
    role: { en: "Contributing reporter", zh: "参与采访写作" },
    summary: {
      en: "MiniMax's AI companion app has the stickiest users of any product in its category in China. Four of them — aged 15 to 24 — describe the agents they built, the attachments they formed, and what happened when the model changed underneath them.",
      zh: "MiniMax 旗下的情感陪伴 AI 是国内同类产品中用户黏性最高的一个。四位 15 到 24 岁的用户讲述了他们亲手「捏」出的智能体、与之建立的感情，以及模型在他们脚下悄悄改变之后发生的事。",
    },
    cover: "/portfolio/images/xingye-users.png",
    originalLink: "https://mp.weixin.qq.com/s/L8oUMwBht7GScn6z43ItVA",
    topics: {
      en: ["AI", "AI Companionship", "Youth Culture"],
      zh: ["AI", "AI 陪伴", "青年文化"],
    },
  },
  {
    slug: "unmasking-ai-faces",
    title: {
      en: "Unmasking the AI Face",
      zh: "揭穿「AI 脸」",
    },
    outlet: {
      en: "CBN Weekly",
      zh: "第一财经杂志",
    },
    date: "2024-11-01",
    role: { en: "Sole author", zh: "独立主笔" },
    summary: {
      en: "Deepfake fraud grew 3,000% in a single year. Inside the labs and companies trying to fight AI with AI — and why every defence they build is, by design, one step behind the attack.",
      zh: "深度伪造欺诈一年增长 3000%。走进那些试图「用 AI 打败 AI」的实验室与公司——以及为什么他们造出的每一道防线，在结构上都注定慢攻击一步。",
    },
    cover: "/portfolio/images/unmasking-ai-faces.png",
    originalLink: "https://www.cbnweek.com/article_detail/32100",
    topics: {
      en: ["AI", "Deepfake", "Content Security"],
      zh: ["AI", "Deepfake", "内容安全"],
    },
  },
  {
    slug: "medical-companions",
    title: {
      en: "When Companionship Becomes a Business: The Hopes and Worries of China's \"Temporary Family\"",
      zh: "当陪诊成为生意：「临时家人」们的探索与忧虑",
    },
    outlet: {
      en: "Tide News",
      zh: "潮新闻",
    },
    date: "2024-02-21",
    role: { en: "Sole author", zh: "独立主笔" },
    summary: {
      en: "More than a thousand companies now sell the service of accompanying strangers to hospital. Following the people doing the work through Shanghai's wards reveals a trade with real demand, no qualifications, no pricing standard — and no clear future.",
      zh: "全国已有一千多家公司在做「陪别人看病」这门生意。跟着陪诊师穿行上海各大医院可以看到：需求是真的，但这个行业没有资格认证、没有收费标准，也还没有明确的未来。",
    },
    cover: "/portfolio/images/peizhen-shengyi.png",
    originalLink: "https://tidenews.com.cn/news.html?id=2719325",
    topics: {
      en: ["Consumer Trends", "Ageing", "Gig Work"],
      zh: ["消费现象", "老龄化", "零工经济"],
    },
  },
  {
    slug: "haiku-mogamigawa",
    title: {
      en: "\"Mogamigawa\": Why Have We Started Writing Haiku?",
      zh: "「最上川」——我们为什么写起了俳句？",
    },
    outlet: { en: "Fudan Weekly", zh: "复旦人周报" },
    date: "2025-05-01",
    role: { en: "Editor", zh: "编辑" },
    summary: {
      en: "A Japanese form four hundred years old has become a meme in Chinese comment sections. Tracing the haiku from Bashō to Kerouac to the \"most XX\" format, and asking why this form, and not Song ci, set off a wave of mass composition.",
      zh: "一种四百年历史的日本诗体，成了中文评论区的网络模因。从松尾芭蕉到凯鲁亚克再到「最 XX」格式，以及一个问题：为什么掀起全民创作的是俳句，而不是宋词。",
    },
    cover: "/portfolio/images/haiku-mogamigawa.png",
    originalLink: "https://mp.weixin.qq.com/s/yHRRyB1v7nbZR0PGTr7z8w",
    topics: {
      en: ["Youth Culture", "Internet Culture", "Literature"],
      zh: ["青年文化", "网络文化", "文学"],
    },
  },
  {
    slug: "fudaners-living-with-ai",
    title: {
      en: "Fudaners Living with AI",
      zh: "与 AI 共处的复旦人",
    },
    outlet: { en: "Fudan Weekly", zh: "复旦人周报" },
    date: "2025-03-16",
    role: { en: "Editor", zh: "编辑" },
    summary: {
      en: "Of 105 Fudan students surveyed, 51 use AI every day. What they use it for, where it starts steering their thinking instead of supporting it, and how the first Chinese university rules on AI in theses landed on campus.",
      zh: "受访的 105 位复旦学生中，51 人每天都用 AI。他们用它做什么，它从什么时候开始带着他们的思路走，以及国内高校第一份毕业论文 AI 使用规定落到校园里之后发生了什么。",
    },
    cover: "/portfolio/images/fudanren-ai.png",
    originalLink: "https://mp.weixin.qq.com/s/gnoRcCRh9YvtIjfeqUqERA",
    topics: {
      en: ["AI", "Youth Culture", "Higher Education"],
      zh: ["AI", "青年文化", "高等教育"],
    },
  },
  {
    slug: "bank-deposit-grey-chain",
    title: {
      en: "Bank Staff Shopping for Deposits: A Grey Industry Chain on Social and E-Commerce Platforms",
      zh: "银行员工在线“求业绩” 社交、电商平台现灰色产业链",
    },
    outlet: {
      en: "Economic Information Daily",
      zh: "经济参考报",
    },
    date: "2023-09-19",
    role: { en: "Sole author", zh: "独立主笔" },
    summary: {
      en: "Money brokers have set up shop on social and e-commerce platforms, working the space between banks and depositors, while some bank employees shop online to hit their deposit targets. An investigation into the grey chain quietly taking shape around bank performance quotas.",
      zh: "资金掮客以网络为阵地，在银行与储户之间游走；有的银行员工则直接网购业绩。一条围绕银行考核任务的灰色产业链正在社交与电商平台上浮现。",
    },
    cover: "/portfolio/images/bank-grey-chain.png",
    originalLink: "https://mp.weixin.qq.com/s/Rk8Ks8K1CBVZ2VPzPNFI8A",
    topics: {
      en: ["Finance", "Platform Governance", "Investigation"],
      zh: ["金融", "平台治理", "调查报道"],
    },
  },
]

/** 列表页和路由都用这一份：按发表日期从新到旧 */
export const articles: Article[] = [...entries].sort((a, b) =>
  b.date.localeCompare(a.date),
)

/* ---- 正文加载 ----
   不用 eager：每篇正文各自打成一个 chunk，点进文章才下载。
   否则所有文章的全文都会塞进主 bundle，列表页首屏会被越来越多的
   正文拖慢（文章多了以后差别很大）。 */

const bodies = import.meta.glob("../content/**/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>

const key = (slug: string, lang: Lang) => `../content/${slug}/${lang}.md`

/** 这篇文章这个语言的正文是否存在（不触发下载） */
export function hasBody(slug: string, lang: Lang): boolean {
  return key(slug, lang) in bodies
}

/** 下载并返回正文；没有这个文件则返回 null */
export async function loadBody(
  slug: string,
  lang: Lang,
): Promise<string | null> {
  const load = bodies[key(slug, lang)]
  if (!load) return null
  const raw = await load()
  return raw && raw.trim() ? raw : null
}

export function findArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

/** 按站点语言把日期显示成 "September 2023" / "2023.09" */
export function formatDate(date: string, lang: Lang): string {
  const [year, month] = date.split("-")
  if (lang === "zh") return `${year}.${month}`
  const name = new Date(`${year}-${month}-01T00:00:00`).toLocaleString("en-US", {
    month: "long",
  })
  return `${name} ${year}`
}
