import { useEffect, useRef } from "react"
import { LanguageProvider } from "./i18n/LanguageContext"
import Navbar from "./components/Navbar"
import ArticleList from "./components/ArticleList"
import ArticlePage from "./components/ArticlePage"
import Footer from "./components/Footer"
import { useRoute, rememberScroll, restoreScroll } from "./router"

function App() {
  const path = useRoute()
  const previous = useRef(path)

  // 离开某个页面时记下滚动位置，回到它时还原
  useEffect(() => {
    if (previous.current !== path) {
      rememberScroll(previous.current)
      previous.current = path
    }
    restoreScroll(path)
  }, [path])

  const slug = path === "/" ? null : path.replace(/^\//, "")

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-paper text-ink flex flex-col">
        <Navbar />
        <main className="flex-1">
          {slug ? <ArticlePage slug={slug} /> : <ArticleList />}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
