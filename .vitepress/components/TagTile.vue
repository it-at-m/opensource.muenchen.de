<!-- .vuepress/components/TagList.vue -->
<template lang="html">
    <div class="tagtile">
        <div class="grid">
            <v-card
                    v-for="(page, index) in pagesWithTags"
                    :key="index"
                    variant="flat"
                    :href="withBase(page.url)"
                    class="card"
            >
                <v-card-title
                        class="pt-5"
                >
                    <div
                            class="card-title"
                    >
                        <software-image-avatar
                            :frontmatter="page.frontmatter"
                        />

                        <span
                                style="overflow: hidden; text-overflow: ellipsis;"
                        >
                            {{ page.frontmatter.application }}
                        </span>

                    </div>
                </v-card-title>
                <v-card-text>
                    <p class="excerpt" v-if="showExcerpt && page.excerpt" v-html="page.excerpt"></p>
                    <div v-if="showTags" style="border-bottom: 1px solid lightgray; width: 100%;"></div>
                    <div v-if="showTags" style="padding-top: 12px; padding-bottom: 8px;">
                        <tag-chip-group
                            :tags="page.frontmatter.tags"
                        />
                    </div>
                </v-card-text>
            </v-card>
        </div>
        <br/>
    </div>
</template>

<script setup>
import {computed} from "vue";
import {data} from '../software.data.js'
import {withBase} from "vitepress";
import SoftwareImageAvatar from "./SoftwareImageAvatar.vue";
import TagChipGroup from "./TagChipGroup.vue";

const props = defineProps({
    tagNames: {
        type: Array,
        default: []
    },
    showTags: {
        type: Boolean,
        default: false
    },
    showExcerpt: {
        type: Boolean,
        default: false
    }
})

const pagesWithTags = computed(() => {
    let pagesWithTags = [];

    for (let softwareEntry of data) {
        if (softwareEntry.frontmatter && softwareEntry.frontmatter.tags) {
            if (softwareEntry.frontmatter.tags.some(r => props.tagNames.includes(r))) {
                pagesWithTags.push(softwareEntry);
            }
        }
    }

    // Sort first by frontmatter-tag "sortingPriority"
    // and lexicographically second
    pagesWithTags.sort((first, second) => {
        let sortPrioFirst = first.frontmatter.sortingPriority;
        let sortPrioSecond = second.frontmatter.sortingPriority;
        if(sortPrioFirst && sortPrioSecond) {
            if(sortPrioFirst === sortPrioSecond) {
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

    return pagesWithTags;
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
    transition: border-color 0.25s, background-color 0.25s;
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
