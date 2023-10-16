<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import SoftwareInfoBox from "./SoftwareInfoBox.vue";

import { useData } from 'vitepress'

import { getCurrentInstance, watch } from 'vue'

const { lang } = useData();
const currentVueInstance = getCurrentInstance();

currentVueInstance.appContext.config.globalProperties.$i18n.locale = lang.value;

watch(lang, async (newLang) => {
  currentVueInstance.appContext.config.globalProperties.$i18n.locale = newLang;
});

const {Layout} = DefaultTheme
</script>
<template>
    <Layout>
        <template #aside-top>
            <software-info-box
                :frontmatter="$frontmatter"
            />
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

@media all and (max-width: 1279px) {
    .mobile {
        display: flex;
    }
}
</style>