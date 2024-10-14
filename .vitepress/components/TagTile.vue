<!-- .vuepress/components/TagList.vue -->
<template lang="html">
  <div class="tagtile">
    <div class="grid">
      <v-card
        v-for="page in pagesWithTags"
        :key="page.url"
        variant="flat"
        :href="withBase(page.url)"
        class="card"
      >
        <v-card-title class="pt-5">
          <div class="card-title">
            <software-image-avatar :frontmatter="page.frontmatter" />

            <span style="overflow: hidden; text-overflow: ellipsis">
              {{ page.frontmatter.title }}
            </span>
          </div>
        </v-card-title>
        <v-card-text>
          <p
            class="excerpt"
            v-if="showExcerpt && page.excerpt"
            v-html="page.excerpt"
          ></p>
          <div
            v-if="showTags"
            style="border-bottom: 1px solid lightgray; width: 100%"
          ></div>
          <div
            v-if="showTags"
            style="padding-top: 12px; padding-bottom: 8px"
          >
            <tag-chip-group :tags="page.frontmatter.tags" />
          </div>
        </v-card-text>
      </v-card>
    </div>
    <br />
  </div>
</template>

<script setup>
import { useData, withBase } from "vitepress";
import { computed } from "vue";

import { data as deData } from "../software-de.data.js";
import { data as enData } from "../software.data.js";
import SoftwareImageAvatar from "./SoftwareImageAvatar.vue";
import TagChipGroup from "./TagChipGroup.vue";

const props = defineProps({
  /**
   * List of Software-Tags to be shown.
   * If list is empty, all Tags are shown, except the excluded ones.
   */
  filter: {
    type: Array,
    default: [],
  },
  /**
   * List of Software-Tags to be removed.
   * Removes all Software with the given tags.
   */
  exclude: {
    type: Array,
    default: [],
  },
  availableTags: {
    type: Array,
    default: null,
  },
  showTags: {
    type: Boolean,
    default: false,
  },
  showExcerpt: {
    type: Boolean,
    default: false,
  },
});

const { lang } = useData();

const pagesWithTags = computed(() => {
  let filteredSoftware = [];

  const i18nData = lang.value === "de" ? deData : enData;

  for (let softwareEntry of i18nData) {
    let softwareEntryTags = softwareEntry.frontmatter.tags;

    if (softwareEntryTags) {
      if (
        !props.availableTags ||
        props.availableTags.length === 0 ||
        softwareEntryTags.some((node) => props.availableTags.includes(node))
      ) {
        // if this software as a tag which is "available" in this context, continue
        if (props.filter.length > 0) {
          if (
            props.filter.every((tag) => softwareEntryTags.includes(tag)) &&
            !softwareEntryTags.some((tag) => props.exclude.includes(tag))
          ) {
            filteredSoftware.push(softwareEntry);
          }
        } else if (
          !softwareEntryTags.some((tag) => props.exclude.includes(tag))
        ) {
          // When no tags are given, show everything that's not excluded
          filteredSoftware.push(softwareEntry);
        }
      }
    }
  }

  // Sort first by frontmatter-tag "sortingPriority"
  // and lexicographically second
  filteredSoftware.sort((first, second) => {
    let sortPrioFirst = first.frontmatter.sortingPriority;
    let sortPrioSecond = second.frontmatter.sortingPriority;
    if (sortPrioFirst && sortPrioSecond) {
      if (sortPrioFirst === sortPrioSecond) {
        first.url.localeCompare(second.url);
      } else {
        return sortPrioFirst - sortPrioSecond;
      }
    } else if (sortPrioFirst) {
      return -1;
    } else if (sortPrioSecond) {
      return 1;
    } else {
      first.url.localeCompare(second.url);
    }
  });

  return filteredSoftware;
});
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}

@media all and (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.card {
  border: 1px solid var(--vp-c-bg-soft);
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  --v-hover-opacity: 0;
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
}

:deep(.excerpt > p) {
  line-height: 24px !important;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.vp-doc a.v-card {
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
}

.card-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
