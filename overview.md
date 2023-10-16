<script setup>
import TagTile from "/.vitepress/components/TagTile.vue";
import TagFilter from "/.vitepress/components/TagFilter.vue";
import { ref } from 'vue';

const selectedFilters = ref([])
</script>

# Overview

A full overview of all the open source software that is used, improved and/or published by the Landeshauptstadt München.

Feel free to filter by the available tags below.

<TagFilter
v-model="selectedFilters"
/>

<TagTile
:tag-names="selectedFilters"
show-tags
/>