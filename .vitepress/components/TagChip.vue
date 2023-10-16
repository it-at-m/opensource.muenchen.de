<script setup>

import {TAG_PROP} from "../theme/enhancements/i18n/utility/tags.ts";

const props = defineProps({
  tag: {
    type: String,
    required: true
  }
})

const i18nSelectorTags = TAG_PROP;

</script>

<template>
  <v-chip
      :value="tag"
      filter
  >
    {{ $t(`${i18nSelectorTags}.${tag}`) }}
  </v-chip>
</template>