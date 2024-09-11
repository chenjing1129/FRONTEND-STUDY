<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="inputValue" placeholder="输入内容" />
        <button type="submit">提交</button>
    </form>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const inputValue = ref<string>('')

const handleSubmit = (): void => {
    console.log(`提交的内容：${inputValue.value}`)
}

</script>

<style scoped>

</style>