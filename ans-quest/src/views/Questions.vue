<template>
    <div>
      <h2>问题列表</h2>
      <ul>
        <li v-for="question in questions" :key="question.questionID">
          <router-link :to="'/questions/' + question.questionID">{{ question.title }}</router-link>
        </li>
      </ul>
      <router-link to="/ask">提问</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  interface Question {
    questionID: number;
    title: string;
    content: string; // 根据你的实际数据结构调整
    userID: number; // 提问者的 ID
    creationDate: string; // 创建日期
  }
  
  export default {
    setup() {
      const questions = ref<Question[]>([]); // 指定类型
  
      const fetchQuestions = async () => {
        const response = await axios.get('http://localhost:8080/api/questions');
        questions.value = response.data; // 这里假设返回的数据符合 Question 类型
      };
  
      onMounted(fetchQuestions);
  
      return { questions };
    },
  };
  </script>
  