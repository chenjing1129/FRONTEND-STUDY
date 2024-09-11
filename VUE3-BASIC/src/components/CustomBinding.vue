<template>
    <div>
        <CustomButton :custom-attr="customValue">自定义按钮</CustomButton>
        <button>{{ customAttr }}</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from './CustomButton.vue'

const customValue = ref<string>('我是自定义属性')

defineProps<{
    customAttr: string
}>()
</script>

<style scoped>

</style>