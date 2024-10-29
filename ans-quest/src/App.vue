<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/questions" v-if="isAuthenticated">问题列表</router-link>
        <router-link to="/ask" v-if="isAuthenticated">提问</router-link>
        <button v-if="isAuthenticated" @click="logout">退出</button>
      </nav>
    </header>
    
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuth } from './router'; // 导入认证方法

export default defineComponent({
  name: 'App',
  setup() {
  const { logout } = useAuth(); // 获取登出方法
  const isAuthenticated = ref(false); // 用于判断用户是否已登录

  const checkAuthStatus = () => {
    // 检查 localStorage 中是否存在有效的 token
    const token = localStorage.getItem('authToken');
    isAuthenticated.value = !!token; // 如果 token 存在，则用户已登录
  };

  return { isAuthenticated, logout, checkAuthStatus };
},
mounted() {
  this.checkAuthStatus(); // 在组件挂载时检查登录状态
},
})
</script>

<style>
/* 添加一些基本样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}
</style>