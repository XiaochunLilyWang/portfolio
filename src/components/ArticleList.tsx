import { useLanguage } from "../i18n/LanguageContext"
import { HOMEPAGE_URL } from "../data/site"
import { articles, formatDate } from "../data/articles"
import { navigate } from "../router"

export default function ArticleList() {
  const { t, lang } = useLanguage()

  return (
    <>
      {/* 站点开篇 */}
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 animate-fade-in-up">
          <p className="text-xs italic tracking-widest text-accent uppercase mb-3">
            {t.hero.kicker}
          </p>
          <h1 className="text-4xl md:text-5xl text-ink font-semibold mb-6">
            {t.hero.heading}
          </h1>
          <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-2xl">
            {t.hero.intro}
          </p>
          <a
            href={HOMEPAGE_URL}
            className="inline-block text-sm text-accent hover:underline mt-6"
          >
            {t.hero.homepageLink}
          </a>
        </div>
      </section>

      {/* 报道列表 */}
      <section className="pb-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-baseline justify-between gap-4 mb-8 pb-3 border-b border-line">
            <h2 className="text-xl text-ink font-semibold">
              {t.list.heading}
            </h2>
            <p className="text-xs text-ink-faint tracking-wider">
              {t.list.count(articles.length)}
            </p>
          </div>

          {articles.length === 0 ? (
            <p className="text-sm text-ink-soft py-8">{t.list.empty}</p>
          ) : (
            <ul className="space-y-10">
              {articles.map((article) => (
                <li key={article.slug}>
                  <button
                    onClick={() => navigate(`/${article.slug}`)}
                    className="group w-full text-left flex flex-col sm:flex-row gap-5"
                  >
                    {/* 封面 */}
                    {article.cover && (
                      <div className="sm:w-56 shrink-0 h-32 sm:h-auto sm:aspect-[16/10] bg-surface-deep rounded-xl overflow-hidden">
                        <img
                          src={article.cover}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}

                    {/* 文字 */}
                    <div className="flex-1">
                      <p className="text-xs text-ink-faint tracking-wider mb-2">
                        {formatDate(article.date, lang)} · {article.outlet[lang]}
                        {" · "}
                        {article.role[lang]}
                        {/* 英文原创是这个作品集里的少数，单独打标 */}
                        {article.originalLanguage === "en" && (
                          <span className="ml-2 px-2 py-0.5 border border-accent/40 text-accent rounded-full">
                            {t.article.englishOriginal}
                          </span>
                        )}
                      </p>
                      <h3 className="text-lg text-ink font-semibold leading-snug group-hover:text-accent transition-colors">
                        {article.title[lang]}
                      </h3>
                      <p className="text-sm text-ink-soft leading-relaxed mt-2 line-clamp-3">
                        {article.summary[lang]}
                      </p>
                      {/* 关键词标签：第一个是大方向，其余是具体领域 */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {article.topics[lang].map((topic) => (
                          <span
                            key={topic}
                            className="px-2.5 py-0.5 text-xs tracking-wider rounded-full bg-accent/10 text-accent"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <span className="inline-block text-sm text-accent mt-3 group-hover:underline">
                        {t.list.read}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
