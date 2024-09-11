<template>
    <div>
        <p>当前温度：{{temperature}}℃</p>
        <button @click="increaseTemp">增加温度</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const temperature = ref<number>(20)

const increaseTemp = (): void => {
    temperature.value++
}
</script>

<style scoped>

</style>