import { useEffect, useState } from "react"
import { useLanguage } from "../i18n/LanguageContext"
import { HOMEPAGE_URL } from "../data/site"
import { navigate } from "../router"

export default function Navbar() {
  const { t, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="text-lg text-ink tracking-wide text-left"
        >
          {t.nav.siteName}
          <span className="ml-2 text-xs text-ink-faint hidden sm:inline">
            {t.nav.siteNameAlt}
          </span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={HOMEPAGE_URL}
            className="hidden sm:inline text-sm text-ink-soft hover:text-accent transition-colors tracking-widest"
          >
            {t.nav.homepage}
          </a>

          {/* 语言切换：同时切换站点文案和文章正文 */}
          <button
            onClick={toggle}
            className="ml-4 w-9 h-9 flex items-center justify-center text-xs tracking-wider text-accent bg-surface rounded-full hover:bg-surface-deep transition-colors"
            aria-label="Switch language"
            title="EN / 中"
          >
            {t.nav.toggleLabel}
          </button>
        </div>
      </div>
    </nav>
  )
}
