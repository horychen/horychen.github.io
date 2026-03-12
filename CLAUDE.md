# CLAUDE.md — mmlabsite 项目指南

## 项目概述

M&M Lab（Motor & Motion Control Lab）实验室官网，基于 **Next.js 15 + Nextra 4** 构建的静态文档站，部署到 **GitHub Pages**。

仓库：`motor-and-motion-control-lab/mmlabsite`

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 15 (App Router)、React 19 |
| 文档 | Nextra 4.3.0-alpha (nextra-theme-docs) |
| 样式 | Tailwind CSS 4、MUI 7、Emotion |
| 3D | Three.js 0.183、urdf-loader |
| 构建 | 静态导出 (`output: 'export'`)、Turbopack (dev) |
| 部署 | GitHub Actions → GitHub Pages (`out/` 目录) |
| 搜索 | Pagefind (postbuild 生成) |

## 目录结构

```
mmlabsite/
├── .github/workflows/deploy.yml   # CI/CD: master push → GitHub Pages
├── public/                        # 静态资源
│   ├── media/albums/              # Gallery 图片（gallery / galleryfun）
│   ├── motor-html/                # 独立 HTML demo（iframe 嵌入）
│   ├── models/wuji-hand/          # URDF + STL 机械手模型
│   ├── courses/                   # 课程相关资源
│   ├── gallery.json               # 构建时生成
│   └── generatefun.json           # 构建时生成
├── scripts/
│   ├── generate-gallery-json.js   # 扫描 albums/gallery → gallery.json
│   ├── generate-galleryfun-json.js
│   ├── html-to-dir.js             # public/*.html → dir/index.html
│   └── dir-to-html.js             # out/ 中 dir/index.html → .html
├── src/
│   ├── app/                       # Next.js App Router 页面
│   │   ├── page.jsx               # 首页
│   │   ├── courses/               # 课程页
│   │   ├── alumni/                # 校友页
│   │   ├── docs/[[...mdxPath]]/   # Nextra MDX 文档
│   │   ├── motor/                 # Motor Demos 索引 + [slug] 动态页
│   │   └── _meta.js               # 导航配置
│   ├── components/                # React 组件
│   │   ├── Banner.tsx, PIProfile.tsx, CoPI.tsx, Courses.tsx, ...
│   │   ├── Gallery.tsx, GalleryFun.tsx, Contact.tsx
│   │   ├── robot-glove/           # 3D 机械手查看器组件群
│   │   └── ui/                    # 通用 UI 组件
│   └── content/                   # MDX 文档源文件
│       ├── courses/               # EE160, EE275, CS290V, Drake 等
│       └── nextra/                # Nextra 示例文档
├── next.config.mjs                # Nextra + 静态导出配置
├── tailwind.config.js             # darkMode: 'class'
├── tsconfig.json                  # @/* → src/*
└── package.json
```

## 常用命令

```bash
npm run dev          # 启动开发服务器 (Turbopack)
npm run build        # 构建：生成 gallery JSON → next build → pagefind + HTML 处理
npm run build:gallery # 仅生成 gallery JSON
```

## 部署流程

1. 推送到 `master` 分支（或手动触发 workflow）
2. GitHub Actions: checkout → Node 23 → `npm ci` → `npm run build` → 上传 `out/`
3. 部署到 GitHub Pages

**注意**：远程默认分支为 `main`，本地工作分支为 `master`，CI 监听 `master`。

## 页面路由

| 路由 | 说明 |
|------|------|
| `/` | 首页（Banner、PI、CoPI、课程、Gallery、联系） |
| `/courses/` | 课程列表 |
| `/alumni/` | 校友（在读 + 毕业生） |
| `/docs/...` | MDX 文档（Nextra 动态路由） |
| `/motor/` | Motor Demos 索引（自动发现 motor-html 子目录） |
| `/motor/[slug]/` | 单个 Demo（iframe 嵌入 public/motor-html/） |
| `/motor/robot-glove-3d/` | 3D 机械手查看器（React + Three.js） |

## 开发约定

- **语言**：项目代码为 TypeScript/TSX，UI 文案中英混合
- **样式**：优先使用 Tailwind 工具类，避免 CSS Modules
- **静态资源**：图片放 `public/media/`，3D 模型放 `public/models/`
- **Motor Demo**：独立 HTML 文件放 `public/motor-html/<name>/index.html`，会被自动发现并在 `/motor/` 页面列出
- **Gallery**：将图片放入 `public/media/albums/gallery/` 或 `galleryfun/`，构建时自动生成 JSON
- **MDX 文档**：放在 `src/content/` 下，通过 Nextra 渲染
- **静态导出**：使用 `next/image` 时必须设置 `unoptimized`，不支持 SSR/ISR
- **构建产物**：`out/` 目录，由 postbuild 脚本处理 HTML 路径

## 关键依赖说明

- **Nextra 4 (alpha)**：文档引擎，支持 LaTeX（KaTeX）、搜索、MDX
- **Three.js + urdf-loader**：用于 3D 机械手 URDF 模型渲染
- **MUI 7**：部分页面使用 Material UI 组件
- **react-resizable-panels**：3D 查看器中的可调面板布局
- **Pagefind**：构建后生成全文搜索索引
