<template>
    <div>
      <h2>注册</h2>
      <form @submit.prevent="register">
        <input v-model="username" placeholder="用户名" required />
        <input v-model="password" type="password" placeholder="密码" required />
        <input v-model="email" placeholder="电子邮件" required />
        <button type="submit">注册</button>
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
      const email = ref('');
      const router = useRouter();
  
      const register = async () => {
        try {
          await axios.post('http://localhost:8080/api/users/register', { username: username.value, password: password.value, email: email.value });
          router.push('/login');
        } catch (error) {
          console.error('注册失败', error);
        }
      };
  
      return { username, password, email, register };
    },
  };
  </script>
  