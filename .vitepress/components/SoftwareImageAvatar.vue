<template lang="html">
    <v-avatar
            size="64"
            rounded="0"
            color="var(--vp-c-default-soft)"
            class="thumb mr-2 rounded"
    >
        <v-img
                v-if="frontmatter && frontmatter.logo"
                :alt="frontmatter.application + ' logo'"
                :src="withBase(frontmatter.logo)"
        />
        <span
                v-else
        >
            {{ frontmatter.application[0] }}
        </span>
    </v-avatar>
</template>

<script setup>

import {withBase} from "vitepress";

defineProps({
    frontmatter: {
        type: Object,
        default: {}
    }
})
</script>

<style scoped>
.thumb {
    min-width: 64px;
    margin-right: 16px;
    height: 64px;
    width: 64px;
    padding: 8px;
    object-fit: scale-down;
}
</style>