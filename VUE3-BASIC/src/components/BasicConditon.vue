<template>
    <div>
        <p v-if="isVisible">这个文本是可见的。</p>
        <p v-else>这个文本是隐藏的。</p>
        <button @click="toggleVisibility">切换显示状态</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const isVisible = ref<boolean>(true)

const toggleVisibility = (): void => {
    isVisible.value = !isVisible.value
}
</script>

<style scoped>

</style>