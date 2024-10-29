<template>
    <div>
        <p>当前计数器的值： {{ count }}</p>
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
        <button @click="reset">清零</button>
    </div>
</template>

<script setup lang="ts">

import { useCounter } from "../composables/useCounter";
const {count,increment,decrement,reset} = useCounter(0)
</script>