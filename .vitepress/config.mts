import MarkdownItFootnote from "markdown-it-footnote";
import { defineConfig } from "vitepress";

const base = "/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // cleanUrls: true, // TODO https://github.com/it-at-m/opensource.muenchen.de/issues/136
  base: base,
  srcExclude: ["README.md"],
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `https://assets.muenchen.de/logos/lhm/icon-lhm-muenchen-32.png`,
      },
    ],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    de: {
      label: "Deutsch",
      lang: "de",
      title: "München Open Source",
      description: "Der magische Ort unserer Open-Source Bemühungen.",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Start", link: "/de/" },
          { text: "Nutzen", link: "/de/use" },
          { text: "Verbessern", link: "/de/improve" },
          { text: "Veröffentlichen", link: "/de/publish" },
          {
            text: "mehr",
            items: [
              { text: "Grundlagen", link: "/de/principles" },
              { text: "Softwareübersicht", link: "/de/software/" },
              { text: "Security", link: "/de/security" },
              { text: "Lizenzen", link: "/de/licenses" },
              { text: "Sponsoring", link: "/de/sponsoring" },
              { text: "Sabbatical", link: "/de/sabbatical" },
              { text: "Eigenentwicklung", link: "/de/in-house-development" },
              { text: "Nutzbarkeitsanalyse", link: "/de/usability-analysis" },
              { text: "Dokumentation", link: "/de/documentation" },
              { text: "Repositories", link: "/de/repositories" },
              { text: "FOSSaaS", link: "/de/fossaas" },
              { text: "OSPO", link: "/de/ospo" },
            ],
          },
        ],

        sidebar: [],
        outline: {
          label: "Auf dieser Seite",
        },
        darkModeSwitchLabel: "Darstellung",
        langMenuLabel: "Sprache wechseln",
        returnToTopLabel: "Zurück nach oben",
        notFound: {
          title: "Seite nicht gefunden.",
          code: "404",
          quote:
            "Mögen hätt' ich schon wollen, aber dürfen hab ich mich nicht getraut!",
          linkText: "Bring mich nach Hause",
        },

        footer: {
          message: `<a href="/de/impress.html">Impressum und Kontakt</a> | <a href="/de/accessibility.html">Barrierefreiheit</a>`,
        },
        editLink: {
          pattern:
            "https://github.com/it-at-m/opensource.muenchen.de/blob/main/:path",
          text: "Diese Seite auf GitHub anzeigen",
        },
      },
    },
  },
  title: "Munich Open Source",
  description: "The magical place of our open source initiative.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Use", link: "/use" },
      { text: "Improve", link: "/improve" },
      { text: "Publish", link: "/publish" },
      {
        text: "more",
        items: [
          { text: "Principles", link: "/principles" },
          { text: "Overview", link: "/software/" },
          { text: "Security", link: "/security" },
          { text: "Licenses", link: "/licenses" },
          { text: "Sponsoring", link: "/sponsoring" },
          { text: "Sabbatical", link: "/sabbatical" },
          { text: "In-house development", link: "/in-house-development" },
          { text: "Usability analysis", link: "/usability-analysis" },
          { text: "Documentation", link: "/documentation" },
          { text: "Repositories", link: "/repositories" },
          { text: "FOSSaaS", link: "/fossaas" },
          { text: "OSPO", link: "/ospo" },
        ],
      },
    ],

    footer: {
      message: `<a href="/impress.html">Impress and Contact</a> | <a href="/accessibility.html">Accessibility</a>`,
    },

    sidebar: [],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/it-at-m/opensource.muenchen.de",
      },
    ],
    editLink: {
      pattern:
        "https://github.com/it-at-m/opensource.muenchen.de/blob/main/:path",
      text: "View this page on GitHub",
    },
  },

  markdown: {
    config(md) {
      md.use(MarkdownItFootnote);
    },
  },
});
