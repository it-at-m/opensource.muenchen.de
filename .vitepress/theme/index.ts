import DefaultTheme from 'vitepress/theme'

import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "vuetify/styles"

import { createI18n } from "vue-i18n";
import { messages, DEFAULT_LANG } from "./enhancements/i18n/i18n";


import {aliases, mdi} from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

import LhmThemeExtension from './LhmThemeExtension.vue'
import "./lhm.css"

const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            }
        }
    }
)
const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'de',
    messages: messages,
    locale: DEFAULT_LANG,
});

console.log('enhace called');
export default {
    ...DefaultTheme,
    Layout: LhmThemeExtension,
    enhanceApp({app}) {
        app.use(vuetify);
        app.use(i18n);
    }
};