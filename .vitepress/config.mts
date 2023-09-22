import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Munich Open Source",
  description: "The magical place of our open source initiative.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/markdown-examples' },
      { text: 'Nutzen', link: '/examples/markdown-examples' },
      { text: 'Verbessern', link: '/examples/markdown-examples' },
      { text: 'Veröffentlichen', link: '/examples/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/it-at-m/opensource.muenchen.de' }
    ]
  }
})
