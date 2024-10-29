<template>
  <nav class="navbar">
    <router-link to="/counter">计数器</router-link>
    <router-link to="/todo">待办清单</router-link>
    <router-link to="/finance">记账应用</router-link>
    <router-link to="/login">个人中心</router-link>
  </nav>

  <router-view class="content"></router-view>
</template>

<script setup lang="ts">
// JavaScript code here if needed
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar a {
  margin: 0 15px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.navbar a.router-link-exact-active {
  color: #fff;
  background-color: #007bff;
  padding: 5px 10px;
  border-radius: 5px;
}

.content {
  padding: 20px;
}

/* Add some responsive design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navbar a {
    margin: 10px 0;
  }
}
</style>