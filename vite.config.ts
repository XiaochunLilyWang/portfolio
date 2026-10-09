import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 作为 GitHub Pages 项目站点部署在 /portfolio/ 下
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
})
