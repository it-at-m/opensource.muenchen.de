<script setup>
defineProps({
    label: {
        type: String
    }
})
</script>

<template>
    <div class="md-chip">
        {{ label }}
    </div>
</template>

<style scoped>

.md-chip {
    --md-chip-height: 28px;
    --md-chip-color: #fff;

    display: inline-block;
    background: var(--md-chip-color);
    padding: 0 12px;
    border-radius: 32px;
    font-size: 12px;
    border: 1px solid black
}

.md-chip::first-letter {
    text-transform: capitalize;
}

.md-chip-hover:hover {
    background: #ccc;
}

.md-chip-clickable {
    cursor: pointer;
}

.md-chip, .md-chip-icon {
    height: var(--md-chip-height);
    line-height: var(--md-chip-height);
}

.md-chip-icon {
    display: block;
    float: left;
    background: #009587;
    width: var(--md-chip-height);
    border-radius: 50%;
    text-align: center;
    color: white;
    margin: 0 8px 0 -12px;
}

.md-chip-remove {
    display: inline-block;
    background: #aaa;
    border: 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    padding: 0;
    margin: 0 -4px 0 4px;
    cursor: pointer;
    font: inherit;
    line-height: 20px;

    &:after {
        color: var(--md-chip-color);
        content: 'x';
    }

    &:hover {
        background: #999;
    }

    &:active {
        background: #777;
    }
}
</style>