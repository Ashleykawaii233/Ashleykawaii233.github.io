// config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '欢迎来到千夏蝉时雨的小屋',
  description: '前端开发者作品集',

  head: [
    // ✅ 正确引入外部 CSS
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects' },
      { text: '关于我', link: '/about' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ashleykawaii233' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 千夏蝉时雨'
    }
  }
})