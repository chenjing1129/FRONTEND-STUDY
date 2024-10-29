<template>
  <div class="login-container">
    <h2>登录</h2>
    <input v-model="username" placeholder="用户名" required class="input-field" />
    <input v-model="password" type="password" placeholder="密码" required class="input-field" />
    <button @click="login" class="login-button">登录</button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
    const errorMessage = ref('');
    const router = useRouter();

    const login = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/users/login', {
          username: username.value,
          password: password.value,
        });

        if (response.data !== "") {
          // 可以在这里存储用户信息，比如 token 和 userId
          console.log(response.data);
          localStorage.setItem('authToken', response.data.userId); 
          // 跳转到主页
          router.push('/home');
        } else {
          errorMessage.value = "登录失败"; // 错误信息
        }
      } catch (error) {
        console.error('登录失败', error);
        errorMessage.value = '登录失败，请重试';
      }
    };

    return { username, password, login, errorMessage };
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #35495e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #4a6b8e;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>