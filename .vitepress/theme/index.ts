import DefaultTheme from "vitepress/theme";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "vuetify/styles";

import { aliases, mdi } from "vuetify/iconsets/mdi";

import "@mdi/font/css/materialdesignicons.css";

import LhmThemeExtension from "./LhmThemeExtension.vue";

import "./lhm.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

export default {
  ...DefaultTheme,
  Layout: LhmThemeExtension,
  enhanceApp({ app }) {
    app.use(vuetify);
  },
};
