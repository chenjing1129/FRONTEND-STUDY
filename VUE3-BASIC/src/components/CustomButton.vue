<template>
    <div>
        <button>{{ customAttr }}</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    customAttr: string
}>()
</script>

<style scoped>

</style>