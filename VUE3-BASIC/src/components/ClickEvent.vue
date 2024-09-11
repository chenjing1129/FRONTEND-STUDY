<template>
    <button @click="handleClick">点击我</button>

    <p> {{  message }}</p>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('还没有点击按钮')

const handleClick = (): void => {
    message.value = '按钮已被点击'
}
</script>

<style scoped>

</style>