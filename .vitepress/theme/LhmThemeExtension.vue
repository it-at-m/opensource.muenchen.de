<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";

import SoftwareInfoBox from "./SoftwareInfoBox.vue";

const lhmLogo =
  "https://assets.muenchen.de/logos/lhm/logo-lhm-muenchen-500.png";

const { Layout } = DefaultTheme;
</script>
<template>
  <Layout>
    <template #nav-bar-content-after>
      <div class="logo">
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
  filter: var(--muc-logo-filter);
  height: 28px;
}

@media all and (max-width: 1279px) {
  .mobile {
    display: flex;
  }
}
</style>
