<template>
    <div>
        <p>原价：{{ price }}</p>
        <p>折扣：{{ discount }}</p>
        <p>折后价：{{ discountedPrice }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const price = ref<number>(100)

const discount = ref<number>(0.8)

const discountedPrice = computed(() => {
    return price.value * discount.value
})
</script>

<style scoped>

</style>