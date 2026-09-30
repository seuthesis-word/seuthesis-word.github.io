import { defineConfig } from 'vitepress'

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
  rewrites: {
    'README.md': 'index.md',
  },
  sitemap: {
    hostname: 'https://seuthesis-word.github.io/',
  },
  lastUpdated: true
})
