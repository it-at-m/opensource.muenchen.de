<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";

import EscapeGame from "../components/EscapeGame.vue";
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

    <template #not-found>
      <EscapeGame />
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
    <template #layout-top>
      <div class="banner">
        <h1>
          Trefft uns auf dem
          <a
            href="https://m-digital.lineupr.com/digitaltag-2025/schedule"
            target="_blank"
            rel="noopener noreferrer"
            >Digitaltag 2025</a
          >
        </h1>
        <p>
          <a
            href="https://veranstaltungen.muenchen.de/rit/veranstaltungen/digitaltag_2025/"
            target="_blank"
            rel="noopener noreferrer"
            >Anmeldung</a
          >
          |
          <a
            href="https://m-digital.lineupr.com/digitaltag-2025/item/ospo"
            target="_blank"
            rel="noopener noreferrer"
            >Use - Improve - Publish - FOSS bei der Landeshauptstadt München</a
          >
        </p>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.banner {
  background-color: var(--vp-c-bg-soft);
  /* Use VitePress background color variable for theme consistency */
  padding: 1rem;
  /* Adjust top padding to account for nav bar height */
  text-align: center;
  color: var(--vp-c-text-1);
  /* Use VitePress text color variable */
  border-bottom: 1px solid var(--vp-c-divider);
  /* Add a subtle bottom border */
}

@media (min-width: 768px) {
  .banner {
    padding-top: calc(var(--vp-nav-height) + 1rem);
    /* Adjust top padding to account for nav bar height on larger screens */
  }
}

.banner p {
  margin: 0;
  /* Remove default paragraph margin */
  font-size: 0.9rem;
  /* Slightly smaller font size */
}
.banner a {
  color: var(--vp-c-brand);
  /* Use VitePress brand color for links */
  text-decoration: none;
  font-weight: 500;
}
.banner a:hover {
  text-decoration: underline;
}

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
