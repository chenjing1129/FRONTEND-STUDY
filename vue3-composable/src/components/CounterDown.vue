<template>
  <div class="countdown-container">
    <h1>倒计时</h1>
    <div class="countdown-display">
      <p>剩余时间: <span>{{ remainingTime }}</span> 秒</p>
    </div>
    <div class="button-group">
      <button @click="start">开始</button>
      <button @click="stop">暂停</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountDown } from "../composables/useCountDown";
const { remainingTime, start, stop, reset } = useCountDown(1);
</script>

<style>
.countdown-container {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 1rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 300px;
}

h1 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.countdown-display {
  margin: 1rem 0;
  font-size: 1.25rem;
  color: #333;
}

.countdown-display span {
  font-weight: bold;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

button:hover {
  background-color: #f8f8f8;
}

button:active {
  background-color: #e9e9e9;
}

button:first-of-type {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

button:nth-of-type(2) {
  background-color: #FFEB3B;
  color: #333;
  border-color: #FFEB3B;
}

button:last-of-type {
  background-color: #F44336;
  color: white;
  border-color: #F44336;
}
</style>