<script setup>
import { TAG_PROP } from "../theme/enhancements/i18n/utility/tags.ts";
import { useTranslator } from "./Translator.ts";

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: false
  }
});

const i18nSelectorTags = TAG_PROP;

const { t } = useTranslator();
</script>

<template>
  <v-chip
    :value="tag"
    filter
  >
    {{ t(`${i18nSelectorTags}.${tag}`) }}
    <span style="padding-left: 4px;" v-if="count">
      ({{ count }})
    </span>
  </v-chip>
</template>
