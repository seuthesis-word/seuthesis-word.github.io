import { defineConfig } from 'vitepress'
const gitlabSvg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="494px" height="455px" viewBox="0 0 494 455" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <!-- Generator: Sketch 3.2.2 (9983) - http://www.bohemiancoding.com/sketch -->
    <title>logo</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <path id="path-1" d="M0,1173.3333 L1999.99995,1173.3333 L1999.99995,0 L0,0 L0,1173.3333 L0,1173.3333 Z"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="gitlab_logo" sketch:type="MSLayerGroup" transform="translate(-359.000000, -360.000000)">
            <g id="g10" transform="translate(999.999975, 587.666648) scale(1, -1) translate(-999.999975, -587.666648) translate(0.000000, 0.999996)">
                <g id="g16">
                    <g id="g18-Clipped">
                        <mask id="mask-2" sketch:name="path22" fill="white">
                            <use xlink:href="#path-1"></use>
                        </mask>
                        <g id="path22"></g>
                        <g id="g18" mask="url(#mask-2)">
                            <g transform="translate(358.666658, 358.666658)">
                                <g id="g44" transform="translate(0.532000, 0.774933)">
                                    <path d="M491.999988,194.666662 L464.441322,279.481326 L409.82399,447.578655 C407.014656,456.226655 394.778657,456.226655 391.96799,447.578655 L337.349325,279.481326 L155.982663,279.481326 L101.362664,447.578655 C98.5533309,456.226655 86.3173312,456.226655 83.5066646,447.578655 L28.8893326,279.481326 L1.33199997,194.666662 C-1.18266664,186.930662 1.57199996,178.455996 8.1519998,173.674662 L246.665327,0.385333324 L485.179988,173.674662 C491.759988,178.455996 494.513321,186.930662 491.999988,194.666662" id="path46" fill="#FC6D26" sketch:type="MSShapeGroup"></path>
                                </g>
                                <g id="g48" transform="translate(155.197863, 1.160267)">
                                    <path d="M91.9999977,0 L91.9999977,0 L182.683995,279.095993 L1.31599997,279.095993 L91.9999977,0 L91.9999977,0 Z" id="path50" fill="#E24329" sketch:type="MSShapeGroup"></path>
                                </g>
                                <g id="g52" transform="translate(247.197860, 1.160267)">
                                    <g id="path54"></g>
                                </g>
                                <g id="g56" transform="translate(28.531199, 1.160800)">
                                    <path d="M218.666661,0 L127.982663,279.09466 L0.890666644,279.09466 L218.666661,0 L218.666661,0 Z" id="path58" fill="#FC6D26" sketch:type="MSShapeGroup"></path>
                                </g>
                                <g id="g60" transform="translate(247.197860, 1.160800)">
                                    <g id="path62"></g>
                                </g>
                                <g id="g64" transform="translate(0.088533, 0.255867)">
                                    <path d="M29.3333326,279.999993 L29.3333326,279.999993 L1.77466662,195.185328 C-0.738666648,187.449329 2.01466662,178.974662 8.59599979,174.194662 L247.109327,0.905333311 L29.3333326,279.999993 L29.3333326,279.999993 Z" id="path66" fill="#FCA326" sketch:type="MSShapeGroup"></path>
                                </g>
                                <g id="g68" transform="translate(247.197860, 1.160267)">
                                    <g id="path70"></g>
                                </g>
                                <g id="g72" transform="translate(29.421866, 280.255593)">
                                    <path d="M0,0 L127.091997,0 L72.4733315,168.097329 C69.6626649,176.746662 57.4266652,176.746662 54.617332,168.097329 L0,0 L0,0 Z" id="path74" fill="#E24329" sketch:type="MSShapeGroup"></path>
                                </g>
                                <g id="g76" transform="translate(247.197860, 1.160800)">
                                    <path d="M0,0 L90.6839977,279.09466 L217.775995,279.09466 L0,0 L0,0 Z" id="path78" fill="#FC6D26" sketch:type="MSShapeGroup"></path>
                                </g>
                                <g id="g80" transform="translate(246.307061, 0.255867)">
                                    <path d="M218.666661,279.999993 L218.666661,279.999993 L246.225327,195.185328 C248.73866,187.449329 245.985327,178.974662 239.403994,174.194662 L0.890666644,0.905333311 L218.666661,279.999993 L218.666661,279.999993 Z" id="path82" fill="#FCA326" sketch:type="MSShapeGroup"></path>
                                </g>
                                <g id="g84" transform="translate(336.973725, 280.255593)">
                                    <path d="M127.999997,0 L0.907999977,0 L55.5266653,168.097329 C58.3373319,176.746662 70.5733316,176.746662 73.3826648,168.097329 L127.999997,0 L127.999997,0 Z" id="path86" fill="#E24329" sketch:type="MSShapeGroup"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
`
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
      { text: 'SEU GitLab项目仓库', link: 'https://gitlab.seu.edu.cn/220232291/seuthesis-word' },
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
      { icon: {svg: gitlabSvg}, link: 'https://gitlab.seu.edu.cn/220232291' },
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
