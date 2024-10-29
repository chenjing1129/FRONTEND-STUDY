<template>
    <div>
      <h2>登录</h2>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="用户名" required />
        <input v-model="password" type="password" placeholder="密码" required />
        <button type="submit">登录</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
      const router = useRouter();
  
      const login = async () => {
        try {
          await axios.post('http://localhost:8080/api/users/login', { username: username.value, password: password.value });
          router.push('/questions');
        } catch (error) {
          console.error('登录失败', error);
        }
      };
  
      return { username, password, login };
    },
  };
  </script>
  