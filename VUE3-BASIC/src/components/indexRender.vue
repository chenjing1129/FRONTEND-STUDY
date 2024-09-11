<template>
    <ul>
        <li v-for="(item,index) in items" :key="index">
            {{ index + 1 }}, {{ item }}
        </li> 
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items =ref<string[]>(['HTML','CSS','JavaScript'])
</script>

<style scoped>

</style>