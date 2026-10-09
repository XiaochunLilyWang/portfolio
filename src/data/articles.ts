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
  /** 英文标签，用于归类展示 */
  topics: string[]
}

export const articles: Article[] = [
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
    topics: ["Finance", "Platforms", "Investigation"],
  },
]

/* ---- 正文加载：把 content/ 下的 Markdown 打包进来 ---- */

const bodies = import.meta.glob("../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

/** 取某篇文章某个语言的正文，没有则返回 null */
export function getBody(slug: string, lang: Lang): string | null {
  const raw = bodies[`../content/${slug}/${lang}.md`]
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
