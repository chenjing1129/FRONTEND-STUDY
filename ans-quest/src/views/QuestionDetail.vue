<template>
    <div v-if="question">
      <h2>{{ question.title }}</h2>
      <p><strong>提问者ID:</strong> {{ question.userID }}</p>
      <p>{{ question.content }}</p>
      <h3>回答:</h3>
      <ul>
        <li v-for="answer in answers" :key="answer.answerID">
          <strong>回答者ID:</strong> {{ answer.userID }}: {{ answer.content }}
        </li>
      </ul>
      <form @submit.prevent="submitAnswer">
        <textarea v-model="answerContent" placeholder="你的回答" required></textarea>
        <button type="submit">提交回答</button>
      </form>
    </div>
    <div v-else>
      <p>加载中...</p>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  interface Question {
    questionID: number;
    title: string;
    content: string;
    userID: number; // 提问者的 ID
    creationDate: string;
  }
  
  interface Answer {
    answerID: number;
    questionID: number; // 关联问题的 ID
    userID: number; // 回答者的 ID
    content: string; // 回答内容
    creationDate: string;
  }
  
  export default {
    setup() {
      const question = ref<Question | null>(null); // 指定类型
      const answers = ref<Answer[]>([]); // 指定类型
      const answerContent = ref('');
      const route = useRoute();
  
      const fetchQuestion = async () => {
        const response = await axios.get(`http://localhost:8080/api/questions/${route.params.id}`);
        question.value = response.data;
        // Fetch answers
        const answersResponse = await axios.get(`http://localhost:8080/api/questions/${route.params.id}/answers`);
        answers.value = answersResponse.data;
      };
  
      const submitAnswer = async () => {
        await axios.post(`http://localhost:8080/api/questions/${route.params.id}/answers`, { content: answerContent.value });
        answerContent.value = ''; // 清空输入框
        fetchQuestion(); // 刷新回答
      };
  
      onMounted(fetchQuestion);
  
      return { question, answers, answerContent, submitAnswer };
    },
  };
  </script>
  