<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import SoftwareInfoBox from "./SoftwareInfoBox.vue";
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