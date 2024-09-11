<template>
    <div>
        <h2>当前形态：{{ currentForm ? '齐天大圣' : '斗战胜佛' }}</h2>
        <button @click="toggleForm">切换形态</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const currentForm = ref<boolean>(true)

const toggleForm = () => {
    currentForm.value = !currentForm.value
}
</script>

<style>
button {
    background-color: #1a73e8;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-left: 5px;
    cursor: pointer;
}
</style>