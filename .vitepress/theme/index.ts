import DefaultTheme from 'vitepress/theme'
import Softwarebox from './Softwarebox.vue'
import "vuetify/styles"
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const vuetify = createVuetify({components, directives})

export default {
  ...DefaultTheme,
  Layout: Softwarebox,
  enhanceApp({app}) {
    app.use(vuetify)
  }
};