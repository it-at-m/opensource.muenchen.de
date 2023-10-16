<template lang="html">
    <div
            class="chip-group"
    >
        <v-chip
                v-for="(tag, index) in tags"
                :key="index"
        >
            {{ tag }}
        </v-chip>
    </div>
</template>
<script setup>
defineProps({
    tags: {
        type: Array,
        default: []
    }
})
</script>
<style scoped>
.chip-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
</style>