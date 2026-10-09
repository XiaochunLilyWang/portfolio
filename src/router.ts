import { useEffect, useState } from "react"

/* 极简 hash 路由。
   GitHub Pages 的项目站点不支持 history 模式的回退，hash 路由可以
   直接刷新 / 分享任意文章链接而不需要服务端配置。
   路由形态：
     #/            文章列表
     #/<slug>      单篇文章 */

export function currentPath(): string {
  const hash = window.location.hash.replace(/^#/, "")
  return hash === "" ? "/" : hash
}

export function useRoute(): string {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const onChange = () => setPath(currentPath())
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  return path
}

export function navigate(path: string) {
  window.location.hash = path
}

/* 列表页记住滚动位置，从文章返回时回到原处；进入文章则从头开始 */
const scrollMemory = new Map<string, number>()

export function rememberScroll(path: string) {
  scrollMemory.set(path, window.scrollY)
}

export function restoreScroll(path: string) {
  window.scrollTo({ top: scrollMemory.get(path) ?? 0, behavior: "instant" })
}
