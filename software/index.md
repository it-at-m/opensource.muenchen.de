<script setup>
import TagTile from "/.vitepress/components/TagTile.vue";
import TagFilter from "/.vitepress/components/TagFilter.vue";
import { ref } from 'vue';

const selectedFilters = ref([])
</script>

# Overview

A complete overview of all open source software used, improved and/or published by the City of Munich.

Feel free to use the filter function with the tags available below.

<ClientOnly>

<TagFilter
v-model="selectedFilters"
/>

<TagTile
:filter="selectedFilters"
show-tags
show-excerpt
/>

</ClientOnly>
