import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { site, type Lang } from "../data/site"

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: (typeof site)["en"]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/* 独立于个人主页的存储键：主页默认中文，这个作品集默认英文，
   两者同源共享 localStorage，用不同的键才不会互相覆盖。 */
const STORAGE_KEY = "portfolio-lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === "en" || saved === "zh" ? saved : "en"
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"
    document.title = site[lang].meta.title
  }, [lang])

  const toggle = () => setLang((prev) => (prev === "en" ? "zh" : "en"))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: site[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return ctx
}
