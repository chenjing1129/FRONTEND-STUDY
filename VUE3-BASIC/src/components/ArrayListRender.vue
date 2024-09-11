<template>
    <ul>
        <li v-for="(item,index) in items" :key="index">{{ item }}</li> 
    </ul>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const items = ref<string[]>(['苹果','香蕉','橘子'])
</script>

<style scoped>

</style>