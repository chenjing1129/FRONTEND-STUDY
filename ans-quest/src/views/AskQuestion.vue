<template>
    <div>
      <h2>提问</h2>
      <form @submit.prevent="askQuestion">
        <input v-model="title" placeholder="问题标题" required />
        <textarea v-model="content" placeholder="问题内容" required></textarea>
        <button type="submit">提交问题</button>
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
  
      const askQuestion = async () => {
        await axios.post(`http://localhost:8080/api/questions`, { title: title.value, content: content.value });
        router.push('/questions');
      };
  
      return { title, content, askQuestion };
    },
  };
  </script>
  