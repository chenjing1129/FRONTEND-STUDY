<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/home" v-if="isAuthenticated" class="nav-link">主页</router-link>
        <router-link to="/questions" v-if="isAuthenticated" class="nav-link">问题列表</router-link>
        <router-link to="/ask" v-if="isAuthenticated" class="nav-link">提问</router-link>
        <router-link to="/login" class="nav-link" v-if="!isAuthenticated">登录</router-link>
        <router-link to="/register" class="nav-link" v-if="!isAuthenticated">注册</router-link>
        <button v-if="isAuthenticated" @click="handleLogout" class="nav-button">退出</button>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useAuth } from './router'; // 导入认证方法
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();
    const { logout } = useAuth(); // 获取登出方法
    const isAuthenticated = ref(false);

    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      isAuthenticated.value = !!token; // 更新认证状态
    };

    const handleLogout = () => {
      logout(); // 调用登出方法
      isAuthenticated.value = false; // 重置认证状态
      router.push('/login'); // 重定向到登录页面
    };

    onMounted(() => {
      checkAuthStatus(); // 组件挂载时检查认证状态
    });

    return { isAuthenticated, handleLogout };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #f9f9f9; /* Light background for better contrast */
  min-height: 100vh; /* Full viewport height */
}

header {
  background-color: #35495e; /* Darker header background */
  color: white; /* White text for contrast */
  padding: 15px 0; /* Increased padding for a more spacious look */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
}

nav {
  display: flex; /* Use flexbox for layout */
  justify-content: center; /* Center the navigation items */
  gap: 20px; /* Space between items */
}

.nav-link, .nav-button {
  color: white; /* Button and link color */
  text-decoration: none; /* Remove underline from links */
  padding: 10px 15px; /* Padding for buttons */
  border-radius: 6px; /* Rounded corners */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transition for hover effects */
  font-weight: 500; /* Slightly bolder font */
}

.nav-link:hover, .nav-button:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Light background on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.router-view {
  padding: 20px; /* Padding around the router view */
}

@media (max-width: 600px) {
  nav {
    flex-direction: column; /* Stack links on smaller screens */
  }
}
</style>