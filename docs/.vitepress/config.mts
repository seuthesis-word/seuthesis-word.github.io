import { defineConfig } from 'vitepress'

// ---------------------------------------------------------------------------
// docs/README.md 里的 gif：markdown 源码保持相对路径（github.com 渲染时走 GitHub
// 自己的存储，不需要 camo 回源大陆 OSS），生产构建时再改写成 OSS 绝对地址。
// 这样部署站点从 OSS 取图（防盗链白名单已含本站域名），构建产物也不再打包 gif。
// ---------------------------------------------------------------------------
const OSS_BASE = 'https://seuthesis-word.oss-cn-hangzhou.aliyuncs.com/'
/** 只改写 figures/ 目录下的 .gif */
const OSS_GIF_RE = /^(?:\.\/)?figures\/[^/]+\.gif$/
/** 只改写 docs/README.md 这一个页面 */
const OSS_README_RE = /(?:^|\/)docs\/README\.md$/

// 用 globalThis 读取，避免在没有 @types/node 的环境下报 TS 错
const nodeEnv: Record<string, string | undefined> =
  (globalThis as any).process?.env ?? {}

/** 默认仅生产构建改写；OSS_ASSETS=1/0 可强制开/关，方便本地验证 */
const ossAssetsEnabled = (): boolean => {
  const flag = nodeEnv.OSS_ASSETS
  if (flag === '1' || flag === 'true') return true
  if (flag === '0' || flag === 'false') return false
  return nodeEnv.NODE_ENV === 'production'
}

/** VitePress 的 env.realPath 是 rewrites 之前的源文件真实路径 */
const isReadme = (env: any): boolean => {
  const real = typeof env?.realPath === 'string' ? env.realPath.replace(/\\/g, '/') : ''
  if (real) return OSS_README_RE.test(real)
  // 兜底：拿不到 realPath 时按 relativePath 判断（README.md 被 rewrite 成 index.md）
  return env?.relativePath === 'README.md' || env?.relativePath === 'index.md'
}

/** 包在 VitePress 内置 image 插件之外：绝对 URL 会被其 EXTERNAL_URL_RE 跳过 */
const rewriteGifToOss = (md: any) => {
  const imageRule = md.renderer.rules.image
  md.renderer.rules.image = (tokens: any, idx: any, options: any, env: any, self: any) => {
    const token = tokens[idx]
    const src = token.attrGet('src')
    if (src && ossAssetsEnabled() && isReadme(env) && OSS_GIF_RE.test(src)) {
      token.attrSet('src', OSS_BASE + src.replace(/^\.\//, ''))
    }
    return imageRule
      ? imageRule(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options)
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SEUThesis-Word: 东南大学硕士学位论文Word模板, 东大研究生论文模板, 研究生论文格式",
  description: "基于Word样式和自动编号的东南大学硕士学位论文模板， 根据东南大学研究生院提供的规范创建，旨在帮助研究生更高效地编写学位论文。模板支持多种自动化格式更新功能，只需要输入内容，并应用相应的格式，文档会自动呈现出符合要求的外观。",
  lang: 'zh-CN',
  base: '/',
  themeConfig: {

    siteTitle: "SEUThesis-Word",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/' },
      { text: '下载', link: '/download' },
      { text: '🌟SEU视觉识别系统🌟', link: '/seu-vis' },
      { text: 'GitHub项目仓库', link: 'https://github.com/seuthesis-word/seuthesis-word.github.io' },
    ],

    sidebarMenuLabel: '菜单',

    sidebar: [
      {
        text: '使用说明',
        items: [
          { text: '文档', link: '/' },
          { text: '下载', link: '/download' },
          { text: '实用链接', link: '/useful-links' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TomPan-1901' },
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
        label: '页面导航'
    },
    lastUpdated: {
        text: '最后更新'
    }
  },
  head: [
    ['meta', { name: 'google-site-verification', content: 'fpLO2Ckk6Kfvk6E8rgD_yGINH7-ums8VFW6Vqmoq4gw' }],
    ['meta', { name: 'google-adsense-account', content: 'ca-pub-6864290273818399' }],
    ['script', { defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "bf24c213a96f4789acdec9e3af0a6bff"}'},],
  ],
  markdown: {
    config: rewriteGifToOss
  },
  rewrites: {
    'README.md': 'index.md',
  },
  sitemap: {
    hostname: 'https://seuthesis-word.github.io/',
  },
  lastUpdated: true
})
