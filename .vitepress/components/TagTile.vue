<!-- .vuepress/components/TagList.vue -->
<template lang="html">
    <div class="tagtile">
        <div class="grid">
            <v-card
                    v-for="(page, index) in pagesWithTags"
                    :key="index"
                    variant="tonal"
                    :href="withBase(page.url)"
            >
                <v-card-title
                    class="pt-5"
                >
                    <div
                            class="card-title"
                    >
                        <img
                                v-if="page && page.frontmatter && page.frontmatter.screenshot"
                                :src="withBase(page.frontmatter.screenshot)"
                                class="thumb"
                        />
                        <img
                                v-else-if="page && page.frontmatter && page.frontmatter.logo"
                                :src="withBase(page.frontmatter.logo)"
                                class="thumb"
                        />
                        <div
                                v-else
                                class="thumb placeholder"
                        >
                            {{ page.frontmatter.application[0] }}
                        </div>

                        <span
                                style="overflow: hidden; text-overflow: ellipsis;"
                        >
                            {{ page.frontmatter.application }}
                        </span>

                    </div>
                </v-card-title>
                <v-card-text>
                    <p v-if="showExcerpt && page.excerpt" v-html="page.excerpt"></p>
                    <div v-if="showTags" style="border-bottom: 1px solid lightgray; width: 100%;"></div>
                    <div v-if="showTags" style="padding-top: 12px; padding-bottom: 8px;">
                        <div
                                class="chip-group"
                        >
                            <v-chip
                                    v-for="(tag, index) in page.frontmatter.tags"
                                    :key="index"
                            >
                                {{ tag }}
                            </v-chip>
                        </div>
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

    console.log(pagesWithTags);

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

.thumb {
    min-width: 64px;
    margin-right: 16px;
    height: 64px;
    width: 64px;
    object-fit: scale-down;
}

.thumb.placeholder {
    font-size: 32px;
    line-height: 64px;
    text-align: center;
    color: var(--vp-button-brand-text);
    background-color: var(--vp-home-hero-name-color);
    border-radius: 100px;
}


.vp-doc a.v-card {
    font-weight: inherit;
    color: inherit;
    text-decoration: none;
    transition: none;
}

.card-title {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.chip-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
</style>
