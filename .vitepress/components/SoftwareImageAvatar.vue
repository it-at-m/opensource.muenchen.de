<template lang="html">
  <v-avatar
    size="64"
    rounded="0"
    color="#e7e8ec"
    class="thumb mr-2 rounded"
  >
    <v-img
      v-if="frontmatter && frontmatter.logo"
      :alt="frontmatter.title + ' logo'"
      :src="withBase(frontmatter.logo)"
      :cover="false"
    />
    <span v-else>
      {{ frontmatter.title[0] }}
    </span>
  </v-avatar>
</template>

<script setup>
import { withBase } from "vitepress";

defineProps({
  frontmatter: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped>
.thumb {
  min-width: 64px;
  margin-right: 16px;
  height: 64px;
  width: 64px;
  padding: 8px;
}
</style>
