<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import {useData, withBase} from 'vitepress'

const {Layout} = DefaultTheme

const siteInfo = useData();

const lang = siteInfo.lang.value;
</script>
<template>
    <Layout>
        <template #aside-top>
            <div v-if="$frontmatter.licensingmodel" class="infobox">
                <img v-if="$frontmatter.screenshot" :src="withBase($frontmatter.screenshot)"/>
                <img v-else-if="$frontmatter.logo" :src="withBase($frontmatter.logo)"/>
                <div class="pt-4">

                    <v-btn
                            v-if="$frontmatter.code"
                            :href="$frontmatter.code"
                            variant="outlined"
                            class="mb-2"
                    >
                        <v-icon
                                start
                                icon="mdi-github"
                        />
                        Code
                    </v-btn>

                    <v-btn
                            v-if="$frontmatter.developerlink"
                            :href="$frontmatter.developerlink"
                            variant="outlined"
                            class="mb-2"
                    >
                        <v-icon
                                start
                                icon="mdi-web"
                        />
                        Website
                    </v-btn>

                    <v-btn
                            v-if="$frontmatter.linkapplication"
                            :href="$frontmatter.linkapplication"
                            variant="outlined"
                            class="mb-2"
                    >
                        <v-icon
                                start
                                icon="mdi-open-in-app"
                        />

                        <span v-if="lang === 'en'">Open App</span>
                        <span v-else>App anzeigen</span>
                    </v-btn>

                    <div
                            v-if="$frontmatter.license"
                    >
                        <v-tooltip
                                text="Licence"
                                location="start"
                        >
                            <template v-slot:activator="{ props }">
                                <div v-bind="props">
                                    <v-icon icon="mdi-license"/>
                                    <span>{{ $frontmatter.license }}</span>
                                </div>
                            </template>
                        </v-tooltip>
                    </div>

                </div>
            </div>
        </template>
    </Layout>
</template>
