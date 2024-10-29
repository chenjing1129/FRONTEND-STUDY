<template>
  <div class="question-list-container">
    <h2 class="header">问题列表</h2>
    <ul class="question-list">
      <li v-for="question in questions" :key="question.questionId" class="question-item">
        <router-link :to="'/questions/' + question.questionId" class="question-link">
          {{ question.title }}
        </router-link>
      </li>
    </ul>
    <router-link to="/ask" class="ask-button">提问</router-link>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Question {
  questionId: number;
  title: string;
  content: string; // 根据你的实际数据结构调整
  userId: number; // 提问者的 ID
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

<style>
.question-list-container {
  max-width: 600px; /* Max width for the container */
  margin: 50px auto; /* Center the container */
  padding: 20px; /* Padding around the container */
  background-color: #ffffff; /* White background for the container */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Softer shadow */
}

.header {
  text-align: center; /* Center the heading */
  margin-bottom: 30px; /* Space below the heading */
  color: #333; /* Darker color for better readability */
}

.question-list {
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove padding */
}

.question-item {
  margin-bottom: 15px; /* Space between each question */
}

.question-link {
  display: block; /* Make the link a block element */
  padding: 15px; /* Padding around the link */
  background-color: #f1f1f1; /* Light background for each question */
  border-radius: 6px; /* Rounded corners */
  text-decoration: none; /* Remove underline from links */
  color: #007bff; /* Link color */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transition for hover effects */
}

.question-link:hover {
  background-color: #e1e1e1; /* Slightly darker background on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.ask-button {
  display: inline-block; /* Inline block for better styling */
  margin-top: 20px; /* Space above the button */
  padding: 10px 15px; /* Padding for button */
  background-color: #007bff; /* Primary color for button */
  color: white; /* White text color */
  border: none; /* Remove border */
  border-radius: 6px; /* Rounded corners */
  text-decoration: none; /* Remove underline */
  font-weight: 500; /* Slightly bolder font */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transition for hover effect */
}

.ask-button:hover {
  background-color: #0056b3; /* Darker color on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}
</style>