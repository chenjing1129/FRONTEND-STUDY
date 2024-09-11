<template>
    <div>
        <p v-if="userAge < 18">未成年用户 {{ userAge }}</p>
        <p v-else-if="userAge >=18 && userAge < 60">成年用户 {{ userAge }}</p>
        <p v-else>老年用户 {{ userAge }}</p>
        <button @click="increaseAge">增加年龄</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userAge = ref<number>(16)

const increaseAge = (): void => {
    userAge.value++
}
</script>

<style scoped>

</style>