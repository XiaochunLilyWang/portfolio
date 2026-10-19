// 站点级文案（导航、标题、按钮）。文章本身的内容在 articles.ts + content/ 里。
// 默认语言是英文 —— 这个站点的首要用途是求职展示。

export type Lang = "en" | "zh"

const en = {
  meta: {
    title: "Reporting Portfolio · Xiaochun Lily Wang",
  },
  nav: {
    siteName: "Xiaochun (Lily) Wang",
    siteNameAlt: "王小淳",
    home: "Portfolio",
    homepage: "About me",
    toggleLabel: "中",
  },
  hero: {
    kicker: "Selected Journalism",
    heading: "Reporting Portfolio",
    intro:
      "Selected stories I have reported and written on technology, business and youth culture — for LatePost, CBN Weekly, Economic Information Daily and others. Each piece is published here in full, in English and in the original Chinese.",
    homepageLink: "Back to my homepage →",
  },
  list: {
    heading: "All Stories",
    empty: "Stories are being added here one by one. Please check back soon.",
    count: (n: number) => `${n} ${n === 1 ? "story" : "stories"}`,
    read: "Read →",
  },
  article: {
    backToList: "← All stories",
    originalLink: "Read the original publication →",
    translationNote:
      "This English version is a translation of the Chinese original. Switch languages with the button in the top right.",
    missingTranslation:
      "The English translation of this story is still in progress. You can read the Chinese original by switching languages with the button in the top right.",
    missingOriginal: "The Chinese text of this story is not available here.",
    outletLabel: "Published in",
    roleLabel: "My role",
    dateLabel: "Date",
    englishOriginal: "Written in English",
  },
  footer: {
    backToTop: "Back to top ↑",
  },
}

const zh: typeof en = {
  meta: {
    title: "新闻作品集 · 王小淳",
  },
  nav: {
    siteName: "王小淳",
    siteNameAlt: "Xiaochun (Lily) Wang",
    home: "作品集",
    homepage: "关于我",
    toggleLabel: "EN",
  },
  hero: {
    kicker: "新闻作品",
    heading: "新闻作品集",
    intro:
      "我为晚点 LatePost、第一财经杂志、经济参考报等媒体采写的部分报道，题材集中在科技、商业与青年文化。每篇都在这里全文呈现，中文原文与英文译文各一份。",
    homepageLink: "返回个人主页 →",
  },
  list: {
    heading: "全部报道",
    empty: "报道正在一篇篇补充进来，欢迎稍后再来。",
    count: (n: number) => `共 ${n} 篇`,
    read: "阅读全文 →",
  },
  article: {
    backToList: "← 返回全部报道",
    originalLink: "阅读原始发表版本 →",
    translationNote:
      "这是中文原文。点击右上角按钮可切换到英文译文。",
    missingTranslation:
      "这篇报道的英文译文还在整理中。点击右上角按钮可阅读中文原文。",
    missingOriginal: "这篇报道的中文原文暂未收录。",
    outletLabel: "发表于",
    roleLabel: "我的角色",
    dateLabel: "时间",
    englishOriginal: "英文原创",
  },
  footer: {
    backToTop: "回到顶部 ↑",
  },
}

export const site: Record<Lang, typeof en> = { en, zh }

/** 个人主页地址，导航和页脚都会链接过去 */
export const HOMEPAGE_URL = "https://xiaochunlilywang.github.io/"
