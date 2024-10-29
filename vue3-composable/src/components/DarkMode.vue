<template>
    <div class="app-container" :class="isDark ? 'dark' : ''">
      <h1>切换主题</h1>
      <!-- 确保 @click 事件处理函数接受一个 MouseEvent 参数 -->
      <button @click="toggleDark">{{ isDark ? '启用浅色模式' : '启用深色模式' }}</button>
      <p>当前模式：{{ isDark ? '深色' : '浅色' }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useDarkMode } from '../composables/useDarkMode';
    
  const { isDark, toggleDark } = useDarkMode();
  </script>
  
  <style>
  /* 定义浅色模式的样式 */
  :root {
    --bg-color: #fff;
    --text-color: #333;
  }
  
  /* 定义深色模式的样式 */
  :root.dark {
    --bg-color: #333;
    --text-color: #fff;
  }
  
  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
  }
  
  .app-container {
    padding: 20px;
    text-align: center;
  }
  
  button {
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    background-color: var(--bg-color);
    color: var(--text-color);
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  button:hover {
    border-color: #888;
  }
  </style>