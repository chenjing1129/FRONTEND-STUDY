<template>
    <div>
        <input v-model="userName" placeholder="输入用户名" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const userName = ref<string>('张三')

watch(userName, (newName) => {
    console.log(`用户名为：${newName}`)
}, { immediate: true })
</script>

<style scoped>

</style>