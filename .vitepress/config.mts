import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      title: "München Open Source",
      description: "Der magische Ort unserer Open-Source Bemühungen.",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          {text: 'Start', link: '/'},
          {text: 'Examples', link: '/examples/markdown-examples'},
          {text: 'Nutzen', link: '/examples/markdown-examples'},
          {text: 'Verbessern', link: '/examples/markdown-examples'},
          {text: 'Veröffentlichen', link: '/examples/markdown-examples'},
        ],

        sidebar: [
          {
            text: 'Examples',
            items: [
              {text: 'Markdown Examples', link: '/examples/markdown-examples'},
              {text: 'Runtime API Examples', link: '/examples/api-examples'}
            ]
          }
        ],
        darkModeSwitchLabel: "darkModeSwitchLabel",
        langMenuLabel: "langMenuLabel",
        returnToTopLabel: "returnToTopLabel",
        notFound: {
          title: "Seite nicht gefunden.",
          code: "404",
          quote: "Mögen hätt' ich schon wollen, aber dürfen hab ich mich nicht getraut!",
          linkText: "Bring mich nach Hause"
        },

      }
    }
  },
  title: "Munich Open Source",
  description: "The magical place of our open source initiative.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/markdown-examples' },
      { text: 'Use', link: '/examples/markdown-examples' },
      { text: 'Improve', link: '/examples/markdown-examples' },
      { text: 'Publish', link: '/examples/markdown-examples' },
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
