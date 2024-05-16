<template lang="html">
  <div class="taglinks">
    <ul>
      <li v-for="post of filteredEntries">
        <a :href="withBase(post.url)">{{ post.frontmatter.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { withBase } from "vitepress";
import { computed } from "vue";

import { data } from "../software.data.js";

const props = defineProps({
  tagName: {
    type: String,
  },
});

const filteredEntries = computed(() => {
  let posts = [];
  for (const softwareEntry of data) {
    if (softwareEntry.frontmatter && softwareEntry.frontmatter.tags) {
      if (softwareEntry.frontmatter.tags.includes(props.tagName)) {
        posts.push(softwareEntry);
      }
    }
  }
  return posts;
});
</script>
