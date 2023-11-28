<script setup>
import TagTile from "/.vitepress/components/TagTile.vue";
import TagFilter from "/.vitepress/components/TagFilter.vue";
import { ref } from 'vue';

const selectedFilters = ref([])
</script>

# Übersicht

Eine vollständige Übersicht sämtlicher Open-Source-Software, die von der Landeshauptstadt München nicht nur verwendet, sondern auch verbessert und/oder veröffentlicht wird.

Nutze gerne auch die Filter-Funktion mit den unten verfügbaren Tags.

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
