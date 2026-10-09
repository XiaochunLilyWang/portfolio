import { useLanguage } from "../i18n/LanguageContext"
import { findArticle, getBody, formatDate } from "../data/articles"
import { navigate } from "../router"
import Markdown from "./Markdown"

export default function ArticlePage({ slug }: { slug: string }) {
  const { t, lang, setLang } = useLanguage()
  const article = findArticle(slug)

  // slug 不存在（比如手改了地址栏）就退回列表
  if (!article) {
    return (
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-accent hover:underline"
          >
            {t.article.backToList}
          </button>
        </div>
      </section>
    )
  }

  const body = getBody(slug, lang)
  const otherLang = lang === "en" ? "zh" : "en"
  const hasOther = getBody(slug, otherLang) !== null

  return (
    <article className="pt-28 pb-8">
      <div className="max-w-2xl mx-auto px-6">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-accent hover:underline"
        >
          {t.article.backToList}
        </button>

        {/* 标题区 */}
        <header className="mt-8 pb-8 border-b border-line animate-fade-in-up">
          <p className="text-xs text-ink-faint tracking-wider mb-3">
            {formatDate(article.date, lang)} · {article.outlet[lang]} ·{" "}
            {article.role[lang]}
          </p>
          <h1 className="text-3xl md:text-4xl text-ink font-semibold leading-snug">
            {article.title[lang]}
          </h1>
          <p className="text-sm md:text-base text-ink-soft leading-relaxed mt-5">
            {article.summary[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
            {article.originalLink && (
              <a
                href={article.originalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                {t.article.originalLink}
              </a>
            )}
            {article.topics.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-0.5 text-xs tracking-wider rounded-full bg-accent/10 text-accent"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* 封面 */}
        {article.cover && (
          <img
            src={article.cover}
            alt=""
            className="w-full rounded-xl mt-10"
          />
        )}

        {/* 正文 */}
        <div className="mt-10">
          {body ? (
            <Markdown source={body} lang={lang} />
          ) : (
            <div className="bg-surface rounded-xl p-6">
              <p className="text-sm text-ink-soft leading-relaxed">
                {lang === "en"
                  ? t.article.missingTranslation
                  : t.article.missingOriginal}
              </p>
              {hasOther && (
                <button
                  onClick={() => setLang(otherLang)}
                  className="text-sm text-accent hover:underline mt-3"
                >
                  {otherLang === "zh" ? "阅读中文原文 →" : "Read in English →"}
                </button>
              )}
            </div>
          )}
        </div>

        {/* 文末返回 */}
        <div className="mt-16 pt-8 border-t border-line">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-accent hover:underline"
          >
            {t.article.backToList}
          </button>
        </div>
      </div>
    </article>
  )
}
