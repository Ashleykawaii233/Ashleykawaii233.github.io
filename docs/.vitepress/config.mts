import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '千夏蝉时雨的小窝',
  description: '全栈web开发者作品集',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects' }
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