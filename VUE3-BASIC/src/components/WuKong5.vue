<template>
    <div class="attackAttribute">
        <div class="inputContent">
            <label for="baseAttack">基础攻击力：</label>
            <input v-model="baseAttack" type="number" />
        </div>
        <div class="inputContent">
        <label for="gearBonus">装备加成：</label>
        <input v-model="gearBonus" type="number" />
        </div>
    <p class="totalAttack">总攻击力：{{ totalAttack }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const baseAttack = ref<number>(50)
const gearBonus = ref<number>(20)

const totalAttack = computed(() => baseAttack.value + gearBonus.value)
</script>

<style scoped>

.attackAttribute {
    font-family: Arial, sans-serif;  
    margin: 20px;  
    padding: 20px;  
    border: 1px solid #ccc;  
    border-radius: 8px;  
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.inputContent {  
    margin-bottom: 15px;  
} 

.inputContent label {  
    display: block;  
    margin-bottom: 5px;  
    font-weight: bold;  
}  

.inputContent input[type="number"] {  
    width: 100%;  
    padding: 8px;  
    border: 1px solid #ddd;  
    border-radius: 4px;  
}  

.totalAttack {
    font-size: 1.2em;  
    font-weight: bold;  
    color: #3498db;  
    margin-top: 20px;  
}
</style>