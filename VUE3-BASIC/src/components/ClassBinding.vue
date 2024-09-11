<template>
    <div>
        <p :class="paragraphClass">这是一段文字</p>
        <button @click="toggleClass">切换样式</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isHighlight = ref<boolean>(false)

const paragraphClass = ref<{[key: string]: boolean}>({
    isHighlight: isHighlight.value,
    normal: !isHighlight.value,
})

const toggleClass = () => {
    isHighlight.value = !isHighlight.value,
    paragraphClass.value = {
        isHighlight: isHighlight.value,
        normal: !isHighlight.value,
    }
}
</script>

<style scoped>
.isHighlight {
    color: red;
}

.normal {
    color: black;
}
</style>