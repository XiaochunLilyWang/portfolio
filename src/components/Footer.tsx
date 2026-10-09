import { useLanguage } from "../i18n/LanguageContext"
import { HOMEPAGE_URL } from "../data/site"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-surface-deep py-8 mt-24">
      <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-ink-faint tracking-wider">
          © {new Date().getFullYear()} {t.nav.siteName} · {t.nav.siteNameAlt}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={HOMEPAGE_URL}
            className="text-xs text-ink-faint hover:text-accent transition-colors tracking-widest"
          >
            {t.nav.homepage}
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-ink-faint hover:text-accent transition-colors tracking-widest"
          >
            {t.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  )
}
