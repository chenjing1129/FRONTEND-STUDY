<template>
    <div>
        <input v-model="firstName" placeholder="输入名" />
        <input v-model="lastName" placeholder="输入姓" />
        <p>全名：{{ fullName }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const firstName = ref<string>('张')
const lastName = ref<string>('三')

const fullName = computed(() => `${firstName.value} ${lastName.value}`)

watch([firstName, lastName], ([newFirstName, newLAstName]) => {
    console.log(`全名变为： ${newFirstName} ${newLAstName}`)
})
</script>

<style scoped>

</style>