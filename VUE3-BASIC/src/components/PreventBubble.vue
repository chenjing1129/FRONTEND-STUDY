<template>
    <div @click="handleOuterClick">
        <button @click.stop="handleButtonClick">点击按钮</button>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const handleOuterClick = (): void => {
    alert('点击了外层div')
}

const handleButtonClick = (): void => {
    alert('点击了按钮')
}
</script>

<style scoped>

</style>