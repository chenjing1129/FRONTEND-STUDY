<template>
    <button @click.once="handleClickOnce">点击一次</button>

    <p>{{ message }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('按钮还未点击')

const handleClickOnce = (): void => {
    message.value = '按钮已被点击'
}
</script>

<style scoped>

</style>