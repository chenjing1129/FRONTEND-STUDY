<template>
  <div class="question-form">
    <h2>提问</h2>
    <form @submit.prevent="askQuestion">
      <input v-model="title" placeholder="问题标题" required />
      <textarea v-model="content" placeholder="问题内容" required></textarea>
      <button type="submit" class="submit-button">提交问题</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const title = ref('');
    const content = ref('');
    const router = useRouter();

    const userId = localStorage.getItem('authToken'); // 从本地存储获取用户 ID

    const askQuestion = async () => {
      await axios.post(`http://localhost:8080/api/questions`, { 
        title: title.value, 
        content: content.value,
        userId: userId // 发送用户 ID
      });
      router.push('/questions'); // 提问后跳转
    };

    return { title, content, askQuestion };
  },
};
</script>

<style scoped>
.question-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

/* 表单输入框聚焦时的样式 */
input:focus, textarea:focus {
  outline: none;
  border-color: #007bff;
}

/* 表单输入框必填项的样式 */
input:required, textarea:required {
  box-shadow: none;
}
</style>