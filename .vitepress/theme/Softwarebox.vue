<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { withBase } from 'vitepress'
const { Layout } = DefaultTheme
</script>
<template>
  <Layout>
    <template #aside-top>
        <div v-if="$frontmatter.licensingmodel" class="infobox">
            <img v-if="$frontmatter.screenshot"  :src="withBase($frontmatter.screenshot)" />
            <img v-else-if="$frontmatter.logo"   :src="withBase($frontmatter.logo)" />
            <dl class="cb">
                <dt v-if="$frontmatter.code" >Code</dt>
                <dd v-if="$frontmatter.code" >
                    <a v-if="$frontmatter.codelinktext" :href="$frontmatter.code">{{ $frontmatter.codelinktext }}</a>
                    <a v-else :href="$frontmatter.code">{{ $frontmatter.code }}</a>
                </dd>
                <dt v-if="$frontmatter.developerlink" >Webseite</dt>
                <dd v-if="$frontmatter.developerlink" ><a :href="$frontmatter.developerlink">{{ $frontmatter.developerlink }}</a></dd>
                <dt v-if="$frontmatter.license" >Lizenz</dt>
                <dd v-if="$frontmatter.license" >{{ $frontmatter.license }}</dd>
                <dt v-if="$frontmatter.linkapplication" >Anwendung</dt>
                <dd v-if="$frontmatter.linkapplication" ><a :href="$frontmatter.linkapplication">{{ $frontmatter.linkapplication }}</a></dd>
            </dl>
        </div>
    </template>
  </Layout>
</template>
