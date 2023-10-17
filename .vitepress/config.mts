import { defineConfig } from 'vitepress'
import MarkdownItFootnote from 'markdown-it-footnote';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/opensource.muenchen.de/',
  srcExclude: [
      'README.md'
  ],
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    }
  },

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
          {text: 'Verbessern', link: '/de/contribute'},
          {text: 'Veröffentlichen', link: '/de/publish'},
          {text: 'Grundlagen', link: '/de/grundlagen'},
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
          message: '<a href="/impress">Impressum und Kontakt</a>'
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
      { text: 'Improve', link: '/contribute' },
      { text: 'Publish', link: '/publish' },
    ],

    footer: {
      message: '<a href="/impress">Impress and Contact</a>'
    },

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/it-at-m/opensource.muenchen.de' },
      {
        icon: {
          svg: `<?xml version="1.0" encoding="utf-8"?>
                <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke=currentColor d="M.72,1.46H30.65V24.15a15,15,0,0,1-29.93,0V1.46Z" transform="translate(-0.29 -1.03)"/>
                  <path fill="currentColor" d="M16.08,14.1a4,4,0,0,0,2.71-1,2,2,0,0,0,.64-1L19,12a1.45,1.45,0,0,1-.51.71,3.77,3.77,0,0,1-2.64.93,4.26,4.26,0,0,1-2.36-.69,1.62,1.62,0,0,1-.82-.95l-.44.17a2.05,2.05,0,0,0,1,1.2,4.47,4.47,0,0,0,2.37.76v5.15H12.74v.52h2.8V28.9h.54V19.77H19v-.52H16.08V14.1ZM14.63,5.84a13.19,13.19,0,0,1,3.56.43,4,4,0,0,1,2.09,1.92,4.66,4.66,0,0,1,.58,1.64c-1.09,0-3.62-.27-3.07.83a3,3,0,0,0,1.83,1.13,8.64,8.64,0,0,0,4.53-.53c.48-.18-.13-.77.21-1,0,0,.24-.12.6-.33-.09-.25-.18-.4-.27-.64l1.83-1,1.34,2.71-1.86,1-.64-1.3c.38-.29.38-.28,1-.71a1.07,1.07,0,0,0-.12-.27,4.31,4.31,0,0,0-1.15.73c-.12.28.07.42,0,.72s-.39.48-.75.6a.78.78,0,0,0,.06.29,1,1,0,0,0,.92-.73c.22.27.22.46.37.64L24.1,13V11.6a1.89,1.89,0,0,0-.38.09V29.47a3.56,3.56,0,0,1-2.22-.94,4.78,4.78,0,0,1-.39-2.74c0-.15.09-7.34-.09-8.2a3.76,3.76,0,0,0-.67-1.3,2.56,2.56,0,0,0-1-.77v13.7H12.43V15.74a2,2,0,0,0-1,.55,2,2,0,0,0-.7,1.33s0,6.5,0,8.2-.19,2-.34,2.19a2.57,2.57,0,0,1-2.42,1.31c0-6.12,0-15.19,0-16.44,0-.6.14-1.19-.4-1.37,0,.43,0,.74,0,1.25l-2.76-1.5c0-.15.09-.16.15-.31a6.33,6.33,0,0,1,.8.31,1.56,1.56,0,0,1,.08-.21A1.94,1.94,0,0,0,5,10.74c.06-.15.06-.14.12-.18s.46.16.86.25c0-.12,0-.21,0-.24s-.45-.17-.75-.32c-.11-.09-.62-.35-1.17-.75a.46.46,0,0,1,.12-.24c.15.09.88.55,1.18.71,0,0,.1-.19.07-.19C5.24,9.59,4.87,9.44,4.3,9a.84.84,0,0,0,.15-.28c.45.28.76.55,1.22.88a2.44,2.44,0,0,1,.57.46c.19.34-.14,1.25.83,1.52v-.29c-.64-.38-.37-1-.61-1.35s-.92-.59-.55-1.1c.41.31,1.55,1.25,1.55,1.28.06.18-.22.71.29,1a9.37,9.37,0,0,0,3.51.74,4.79,4.79,0,0,0,3.32-1.34,5.23,5.23,0,0,0,.52.66l.82-.27S16,10,16,9c0-1.49,0-1.84-.17-2.22a2.43,2.43,0,0,0-1.2-1Z" transform="translate(-0.29 -1.03)"/>
                  <path fill="currentColor" d="M13.44,29.62h1.09v1.46c-.06.1-.37.16-1.06.65-.86.61-1.22.88-2.05,1.4,0-1.49,1.25-2.26,1.53-2.62s.3-.83.49-.89Z" transform="translate(-0.29 -1.03)"/>
                  <path fill="currentColor" d="M17,29.62H18.1a6.8,6.8,0,0,0,.81,1.25c.62.7,1,.58,1.13,2.26a13,13,0,0,1-1.76-1.25c-.74-.55-1.07-.58-1.23-.8A4.93,4.93,0,0,1,17,29.62Z" transform="translate(-0.29 -1.03)"/>
                  <path fill="currentColor" d="M13.7,8V8c.48.25.5.24,1,0A.61.61,0,0,0,14,7.62.39.39,0,0,0,13.7,8Zm-.21-1.46c-.06.39,0,.43.26.68.08-.43.09-.39-.26-.68Zm.39,0c-.07.39,0,.44.29.66,0-.33.1-.38-.29-.66Zm.4,0c-.06.39,0,.4.3.66,0-.33.05-.41-.3-.66Zm.41,0c-.07.39,0,.46.29.66,0-.32,0-.36-.29-.66Zm-1-.52a1.6,1.6,0,0,1,.91.19,2.13,2.13,0,0,1,1,1.11c.1.27,0,3.75,0,3.75l-.07,0a5.41,5.41,0,0,0-.61-1,13.33,13.33,0,0,1-1.56,0,6.14,6.14,0,0,1-.1-1l-.35-.06c.32-1.59-.21-2.62.84-3.08Z" transform="translate(-0.29 -1.03)"/>
              
                </svg>`
        },
        link: 'https://www.muenchen.de/'
      }
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
