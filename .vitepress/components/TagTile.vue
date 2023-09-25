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
                <div class="logo">
                    <img v-if="page && page.frontmatter && page.frontmatter.screenshot"
                         :src="page.frontmatter.screenshot" class="thumb"/>
                    <img v-else-if="page && page.frontmatter && page.frontmatter.logo" :src="page.frontmatter.logo"
                         class="thumb"/>
                </div>
                <div style="width: 100%;">
                    <b>
                        <router-link
                                :to="{ path: page.path}">{{ page.frontmatter.application }}
                        </router-link>
                    </b>
                    <p v-if="page.excerpt" v-html="page.excerpt"></p>
                    <p v-else v-html="page.content"></p>
                    <div style="border-bottom: 1px solid lightgray; width: 100%;"></div>
                    <div style="padding-top: 12px; padding-bottom: 8px;">
                        <chip
                            v-for="(tag, index) in page.frontmatter.tags"
                            :key="index"
                            :label="tag"
                            style="margin-right: 4px;"
                        />
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>
</template>

<script>
import Chip from "./Chip.vue";

export default {
    components: {Chip},
    props: {
        tagNames: {
            type: Array,
            default: []
        },
    },
    computed: {
        pagesWithTags() {
            let page_tags = {}
            for (let page of this.$site.pages) {
                for (let index in page.frontmatter.tags) {
                    const tag = page.frontmatter.tags[index]
                    if (tag in page_tags) {
                        page_tags[tag].push(page)
                    } else {
                        page_tags[tag] = [page]
                    }
                }
            }
            let pagesWithTags = [];
            for (let tag of this.tagNames) {
                pagesWithTags = pagesWithTags.concat(page_tags[tag])
            }
            return pagesWithTags;
        },
        orderedTags: function () {
            return _.orderBy(this.tags, 'prio')
        }
    }
}
</script>
<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 1em;
}

.logo {
    padding-right: 12px;
    max-width: 20%;
}

.card {
    border: solid 1px lightgray;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>