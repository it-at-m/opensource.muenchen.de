<!-- .vuepress/components/TagList.vue -->
<!-- TODO eigenentwicklung -->
<template lang="html">
    <div class="tagtile">
        <div class="grid">
            <div
                    v-for="(page, index) in pagesWithTags"
                    :key="index"
                    class="card"
            >
                <div class="card-content">
                    <img
                        v-if="page && page.frontmatter && page.frontmatter.screenshot"
                        :src="page.frontmatter.screenshot"
                        class="thumb"
                    />
                    <img
                        v-else-if="page && page.frontmatter && page.frontmatter.logo"
                        :src="page.frontmatter.logo"
                        class="thumb"
                    />
                    <div
                        v-else
                        class="thumb placeholder"
                    >
                        {{ page.frontmatter.application[0] }}
                    </div>

                    <div>
                        <a
                            :href="page.url"
                        >
                            {{ page.frontmatter.application }}
                        </a>
                    </div>
                </div>
                <div>
                    <p v-if="showExcerpt && page.excerpt" v-html="page.excerpt"></p>
                    <div v-if="showTags" style="border-bottom: 1px solid lightgray; width: 100%;"></div>
                    <div v-if="showTags" style="padding-top: 12px; padding-bottom: 8px;">
                        <chip
                                v-for="(tag, index) in page.frontmatter.tags"
                                :key="index"
                                :label="tag"
                                style="margin-right: 4px; margin-bottom: 4px;"
                        />
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>
</template>

<script setup>
import Chip from "./Chip.vue";
import {computed} from "vue";
import {data} from '../software.data.js'

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

.card {
    border: solid 1px lightgray;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
}

.card-content {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
