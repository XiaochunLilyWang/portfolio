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
    () => marked.parse(source, { async: false, breaks: false, gfm: true }),
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
