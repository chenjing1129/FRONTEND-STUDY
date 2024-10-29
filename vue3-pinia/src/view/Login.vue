<template>
    <div>
      <h2>登录</h2>
      <input v-model="phone" placeholder="请输入手机号"/>
      <button @click="sendCode">发送验证码</button>
      <input v-model="code" placeholder="请输入验证码"/>
      <button @click="login">登录</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/useAuth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const phone = ref<string>('13913762121');
  const code = ref<string>('');
  
  const sendCode = async () => {
    await authStore.sendCode(phone.value);
  };
  
  const login = async () => {
    await authStore.login(phone.value, code.value);
    // 登录成功后跳转到个人中心
    router.push('/profile');
  };
  </script>