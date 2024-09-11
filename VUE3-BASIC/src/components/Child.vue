<template>
    <button @click="notifyParent">通知父组件</button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['notify'])

const notifyParent = (): void => {
    emit('notify', '子组件已点击按钮')
}
</script>

<style scoped>

</style>