<template>
    <div class="login-container">
      <h2>用户登录</h2>
      <button class="login-button" @click="handleLogin">
        登录
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const handleLogin = () => {
      // 编程式导航
      localStorage.setItem("token", "hello123");
      router.push("/user/profile");
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f7f7f7;
    padding: 20px;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #3baee0;
  }
  
  .login-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #3baee0;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  .login-button:hover {
    background-color: #2fa0c8;
  }
  
  .login-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 174, 224, 0.5);
  }
  </style>
