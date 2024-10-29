<template>
    <div class="user-settings">
      <h3>用户个人设置</h3>
      <button class="logout-button" @click="handleLayout">退出登录</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const handleLayout = () => {
      localStorage.removeItem("token");
      router.push("/login");
  }
  </script>
  
  <style lang="scss" scoped>
  .user-settings {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h3 {
    color: #3182ce;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  
  .logout-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #e53e3e;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  
    &:hover {
      background-color: #c53737;
    }
  
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.5);
    }
  }
  </style>