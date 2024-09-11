<template>
    <div>
        <input v-model="searchQuery" placeholder="搜索关键词" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const searchQuery = ref<string>('')

watch(searchQuery, () => {
    console.log('搜索关键词', searchQuery.value)
})
</script>

<style scoped>

</style>