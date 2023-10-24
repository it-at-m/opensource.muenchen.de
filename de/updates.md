# Updates


## 2023

<TagTile 
:available-tags="['start2023']"
show-tags
show-excerpt
/>

## 2022

<TagTile 
:available-tags="['start2022']"
show-tags
show-excerpt
/>

## 2021

<TagTile 
:available-tags="['start2021']"
show-tags
show-excerpt
/>


# Updates mit tags



<ClientOnly>

<TagFilter
  v-model="selectedFilters"
  :available-tags="['start2023', 'start2022', 'start2021', 'start2020']"
/>

<TagTile 
  :filter="selectedFilters"
  show-tags
  show-excerpt
/>

</ClientOnly>


<script setup>
import TagTile from "/.vitepress/components/TagTile.vue";
import TagFilter from "/.vitepress/components/TagFilter.vue";
import { ref } from 'vue';

const selectedFilters = ref(['start2023'])
</script>
