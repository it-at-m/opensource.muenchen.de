<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

import SoftwareInfoBox from "./SoftwareInfoBox.vue";

const { isDark } = useData();

const ritLogo =
  "https://assets.muenchen.de/logos/rit/RIT_Basislogo_umbragrau-64.png";
const lhmLogo = "https://assets.muenchen.de/logos/lhm/logo-lhm-muenchen.svg";

const { Layout } = DefaultTheme;
</script>
<template>
  <Layout>
    <template #nav-bar-content-after>
      <div class="logo">
        <a
          href="https://muenchen.digital/"
          target="_blank"
        >
          <img
            :src="ritLogo"
            alt="Logo München. Digital."
          />
        </a>
      </div>
    </template>

    <template #aside-top>
      <software-info-box :frontmatter="$frontmatter" />
    </template>

    <template #doc-before>
      <software-info-box
        :frontmatter="$frontmatter"
        horizontal
        class="mobile"
      />
    </template>

    <template #layout-bottom>
      <div class="bottom-logo">
        <a
          href="https://www.muenchen.de/"
          target="_blank"
        >
          <img
            :src="lhmLogo"
            alt="Logo Landeshauptstadt München"
          />
        </a>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.mobile {
  display: none;
}

.logo {
  display: flex;
  align-items: center;
}
@media (min-width: 768px) {
  .extra + .logo:before {
    margin-right: 16px;
    margin-left: 16px;
    width: 1px;
    height: 24px;
    background-color: var(--vp-c-divider);
    content: "";
  }
}

.logo img {
  height: 28px;
  filter: var(--muc-logo-filter);
}

.bottom-logo {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}

.bottom-logo img {
  filter: var(--muc-logo-filter);
}

@media all and (max-width: 1279px) {
  .mobile {
    display: flex;
  }
}
</style>
