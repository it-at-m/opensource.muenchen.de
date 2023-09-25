import { defineConfig } from 'vitepress'
import MarkdownItFootnote from 'markdown-it-footnote';

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
          {text: 'Nutzen', link: '/de/use'},
          {text: 'Verbessern', link: '/de/contribute'},
          {text: 'Veröffentlichen', link: '/de/publish'},
        ],

        sidebar: [],
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
      { text: 'Use', link: '/use' },
      { text: 'Improve', link: '/contribute' },
      { text: 'Publish', link: '/publish' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/it-at-m/opensource.muenchen.de' }
    ]
  },

  markdown: {
    config(md) {
      md.use(MarkdownItFootnote);
    }
  }
})
