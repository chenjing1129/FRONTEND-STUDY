<template>
  <div class="register-container">
    <h2>注册</h2>
    <form @submit.prevent="register" class="register-form">
      <input v-model="username" placeholder="用户名" required class="input-field" />
      <input v-model="password" type="password" placeholder="密码" required class="input-field" />
      <input v-model="email" placeholder="电子邮件" required class="input-field" />
      <button type="submit" class="login-button">注册</button>
    </form>
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
    const email = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const register = async () => {
      try {
        await axios.post('http://localhost:8080/api/users/register', {
          username: username.value,
          password: password.value,
          email: email.value,
        });
        router.push('/login');
      } catch (error) {
        console.error('注册失败', error);
        errorMessage.value = '注册失败，请重试';
      }
    };

    return { username, password, email, register, errorMessage };
  },
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.register-form {
  display: flex;
  flex-direction: column;
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