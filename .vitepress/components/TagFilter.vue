<script setup>
import {ref} from "vue";
import {computed} from "vue";
import {data} from "../software.data.js";

const props = defineProps({
    modelValue: {
        type: Array,
        default: []
    },
    availableTags: {
        type: Array,
        default: []
    },
});

defineEmits(['update:modelValue'])

const selectedTags = ref([]);

const allTags = computed(() => {
    let allTags = new Set();

    for (let softwareEntry of data) {
        if (softwareEntry.frontmatter && softwareEntry.frontmatter.tags) {
            softwareEntry.frontmatter.tags.forEach(tag => allTags.add(tag));
        }
    }

    console.log(allTags);

    return allTags;
});
</script>

<template>
    <v-chip-group
            :model-value="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
            multiple
    >
        <v-chip
                v-for="(tag, index) in (availableTags.length > 0 ? availableTags : allTags)"
                :key="index"
                :value="tag"
                filter
        >
            {{ tag }}
        </v-chip>
    </v-chip-group>
</template>

<style scoped>

</style>