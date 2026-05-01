import { useRouter } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "vuetify/styles";

import { aliases, mdi } from "vuetify/iconsets/mdi";

import "@mdi/font/css/materialdesignicons.css";

import LhmThemeExtension from "./LhmThemeExtension.vue";

import "./lhm.css";

const MANUAL_LANGUAGE_STORAGE_KEY = "manual-language";

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

function getPreferredBrowserLanguage(): string {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  const primaryLanguage = languages[0]?.toLowerCase() ?? "en";

  return primaryLanguage.startsWith("de") ? "de" : "en";
}

function isGermanPath(path: string): boolean {
  return path === "/de/" || path.startsWith("/de/");
}

function persistLanguageFromPath(path: string): void {
  localStorage.setItem(
    MANUAL_LANGUAGE_STORAGE_KEY,
    isGermanPath(path) ? "de" : "en"
  );
}

function getStoredLanguage(): string | null {
  const storedLanguage = localStorage.getItem(MANUAL_LANGUAGE_STORAGE_KEY);

  if (storedLanguage === "de" || storedLanguage === "en") {
    return storedLanguage;
  }

  return null;
}

function getLocalizedPath(path: string, language: string): string {
  if (language === "de") {
    return isGermanPath(path) ? path : `/de${path}`;
  }

  if (!isGermanPath(path)) {
    return path;
  }

  const englishPath = path.replace(/^\/de/, "");
  return englishPath || "/";
}

export default {
  ...DefaultTheme,
  Layout: LhmThemeExtension,
  enhanceApp({ app }) {
    app.use(vuetify);
  },

  setup() {
    const router = useRouter();
    let previousPath = "";
    let skipNextLocalePersistence = false;

    router.onAfterRouteChange = (to) => {
      const nextPath = new URL(to, window.location.origin).pathname;

      if (skipNextLocalePersistence) {
        skipNextLocalePersistence = false;
        previousPath = nextPath;
        return;
      }

      if (
        previousPath &&
        isGermanPath(previousPath) !== isGermanPath(nextPath)
      ) {
        persistLanguageFromPath(nextPath);
      }

      previousPath = nextPath;
    };

    onMounted(() => {
      const currentPath = window.location.pathname;
      const currentSearch = window.location.search;
      const currentHash = window.location.hash;
      const storedLanguage = getStoredLanguage();
      const browserLanguage = getPreferredBrowserLanguage();
      const targetLang = storedLanguage ?? browserLanguage;
      const localizedPath = getLocalizedPath(currentPath, targetLang);

      previousPath = currentPath;

      if (localizedPath !== currentPath) {
        skipNextLocalePersistence = true;
        void router.go(`${localizedPath}${currentSearch}${currentHash}`);
      }
    });
  },
};
