import { defineConfig } from 'vitepress'
import MarkdownItFootnote from 'markdown-it-footnote';

const base = '/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: base,
  srcExclude: [
      'README.md'
  ],
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    }
  },
  head: [['link', { rel: 'icon', href: `${base}opensource.muenchen.de.icon.png` }]],
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
          {text: 'Start', link: '/de/'},
          {text: 'Nutzen', link: '/de/use'},
          {text: 'Verbessern', link: '/de/improve'},
          {text: 'Veröffentlichen', link: '/de/publish'},
          {text: 'Übersicht', link: '/de/software/' },
          {text: 'Grundlagen', link: '/de/principles'},
        ],

        sidebar: [],
        outline: {
          label: "Auf dieser Seite"
        },
        darkModeSwitchLabel: "Darstellung",
        langMenuLabel: "Sprache wechseln",
        returnToTopLabel: "Zurück nach oben",
        notFound: {
          title: "Seite nicht gefunden.",
          code: "404",
          quote: "Mögen hätt' ich schon wollen, aber dürfen hab ich mich nicht getraut!",
          linkText: "Bring mich nach Hause"
        },

        footer: {
          message: `<a href="/de/impress.html">Impressum und Kontakt</a> | <a href="/de/accessibility.html">Barrierefreiheit</a>`
        },
        editLink: {
          pattern: 'https://github.com/it-at-m/opensource.muenchen.de/blob/main/:path',
          text: 'Diese Seite auf GitHub anzeigen'
        },
      },
    }
  },
  title: "Munich Open Source",
  description: "The magical place of our open source initiative.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Use', link: '/use' },
      { text: 'Improve', link: '/improve' },
      { text: 'Publish', link: '/publish' },
      { text: 'Overview', link: '/software/' },
      {text: 'Principles', link: '/principles'},
    ],

    footer: {
      message: `<a href="/impress.html">Impress and Contact</a> | <a href="/accessibility.html">Accessibility</a>`
    },

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/it-at-m/opensource.muenchen.de' }
    ],
    editLink: {
      pattern: 'https://github.com/it-at-m/opensource.muenchen.de/blob/main/:path',
      text: 'View this page on GitHub'
    },
  },

  markdown: {
    config(md) {
      md.use(MarkdownItFootnote);
    }
  }
})
