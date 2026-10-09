# Reporting Portfolio · 新闻作品集

王小淳的新闻作品集站点，每篇报道全文收录，中英文各一份。

视觉与 [个人主页](https://github.com/XiaochunLilyWang/XiaochunLilyWang.github.io) 同一套（同样的配色、字体和组件风格），技术栈也一致：React 19 + TypeScript + Vite + Tailwind v4。

线上地址：https://xiaochunlilywang.github.io/portfolio/

## 本地开发

```bash
pnpm install
pnpm dev
```

## 新增一篇报道

1. **建正文文件**：在 `src/content/` 下新建一个目录，目录名就是这篇文章的 URL 片段（slug，只用小写字母和连字符），里面放：
   - `zh.md` —— 中文原文
   - `en.md` —— 英文译文（还没译好可以先不建，页面会显示「译文整理中」，并提供切到中文的入口）

2. **登记元数据**：在 `src/data/articles.ts` 的 `articles` 数组**最前面**加一条。数组顺序就是列表页顺序。

3. **放封面图**（可选）：图片放在 `public/images/` 下，`cover` 字段写成 `/portfolio/images/你的文件名.png`（注意要带 `/portfolio` 前缀）。

## 正文 Markdown 约定

正文直接写 Markdown，样式统一在 `src/index.css` 的 `.article-body` 里：

| 写法 | 效果 |
| --- | --- |
| `## 小标题` | 文内一级小标题 |
| `### 更小的标题` | 二级小标题 |
| `> 引述的话` | 左侧带细线的引述段 |
| `**加粗**` / `*斜体*` | 强调 |
| `---` | 居中的短分隔线，用于分节 |
| `![](/portfolio/images/x.png)` | 配图（自动圆角、满宽） |
| `*图注文字*`（紧跟在图片后另起一段） | 居中的小字图注 |

文末署名的惯例写法：

```markdown
---

*记者：XXX　实习生：王小淳　上海报道*
```

## 站点文案

导航、首页介绍、按钮这些站点级文字在 `src/data/site.ts`，中英文两份。

## 部署

推到 `main` 后 GitHub Actions 自动构建并发布到 GitHub Pages（`.github/workflows/deploy.yml`）。

因为是项目站点（部署在 `/portfolio/` 子路径下），`vite.config.ts` 里的 `base` 必须保持为 `/portfolio/`，站内所有绝对路径的图片也要带这个前缀。路由用的是 hash 模式（`#/slug`），这样刷新和分享任意文章链接都不需要服务端配置。
