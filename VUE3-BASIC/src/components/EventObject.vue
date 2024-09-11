<template>
    <button @click="handleClick">点击获取鼠标坐标</button>

    <p>点击位置:X:{{ x }}, Y:{{ y }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const x = ref<number>(0)
const y = ref<number>(0)

const handleClick = (event: MouseEvent): void => {
    x.value = event.clientX
    y.value = event.clientY
}
</script>

<style scoped>

</style>