<template>
    <div class="user-profile">
      <h3>用户个人资料</h3>
      <!-- 这里可以添加更多的用户信息展示 -->
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .user-profile {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h3 {
    color: #3182ce;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  
  /* 可以添加更多的样式来展示用户信息 */
  .user-profile p {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 10px;
  }
  
  .user-profile p:last-child {
    margin-bottom: 0;
  }
  </style>