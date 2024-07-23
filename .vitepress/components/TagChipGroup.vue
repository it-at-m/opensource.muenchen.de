<template lang="html">
  <div class="chip-group">
    <tag-chip
      v-for="(tag, index) in tags"
      :key="index"
      :tag="tag"
    />
  </div>
</template>
<script setup>
import TagChip from "./TagChip.vue";

defineProps({
  tags: {
    type: Array,
    default: [],
  },
});
</script>
<style scoped>
.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
