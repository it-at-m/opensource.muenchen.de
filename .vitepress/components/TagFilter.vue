<script setup>
import { computed, ref } from "vue";

import { data } from "../software.data.js";
import TagChip from "./TagChip.vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: [],
  },
  availableTags: {
    type: Array,
    default: [],
  },
});

defineEmits(["update:modelValue"]);

const selectedTags = ref([]);

const allTags = computed(() => {
  let allTags = new Set();

  for (let softwareEntry of data) {
    if (softwareEntry.frontmatter && softwareEntry.frontmatter.tags) {
      softwareEntry.frontmatter.tags.forEach((tag) => allTags.add(tag));
    }
  }

  return allTags;
});

function getCountOfTag(tag) {
  let counter = 0;
  for (let softwareEntry of data) {
    if (
      softwareEntry &&
      softwareEntry.frontmatter &&
      softwareEntry.frontmatter.tags &&
      softwareEntry.frontmatter.tags.includes(tag)
    ) {
      counter++;
    }
  }
  return counter;
}
</script>

<template>
  <v-chip-group
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    multiple
  >
    <tag-chip
      v-for="(tag, index) in availableTags.length > 0 ? availableTags : allTags"
      :key="index"
      :tag="tag"
      :count="getCountOfTag(tag)"
      filter
    />
  </v-chip-group>
</template>

<style scoped></style>
