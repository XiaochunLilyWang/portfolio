import { useMemo } from "react"
import { marked } from "marked"

/* 正文由我们自己写进仓库，不是用户输入，所以直接渲染 HTML 即可。
   样式统一在 index.css 的 .article-body 里。 */
export default function Markdown({
  source,
  lang,
}: {
  source: string
  lang: string
}) {
  const html = useMemo(
    // breaks: true —— 正文每段都写成单行，所以换行一律是刻意的（受访者资料块等）
    () => marked.parse(source, { async: false, breaks: true, gfm: true }),
    [source],
  )

  return (
    <div
      className="article-body"
      lang={lang === "zh" ? "zh-CN" : "en"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
