<template>
  <div class="question-detail-container" v-if="question">
    <h2 class="question-title">{{ question.title }}</h2>
    <p class="question-info"><strong>提问者</strong> {{ question.userId }}:</p>
    <p class="question-content">{{ question.content }}</p>
    
    <h3 class="answer-header">回答:</h3>
    <ul class="answer-list">
      <li v-for="answer in answers" :key="answer.answerId" class="answer-item">
        <strong>回答者</strong> {{ answer.userId }}: {{ answer.content }}
      </li>
    </ul>
    
    <form @submit.prevent="submitAnswer" class="answer-form">
      <textarea v-model="answerContent" placeholder="你的回答" required class="answer-textarea"></textarea>
      <button type="submit" class="submit-button">提交回答</button>
    </form>
  </div>
  
  <div v-else>
    <p class="loading">加载中...</p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

interface Question {
  questionId: number;
  title: string;
  content: string;
  userId: number; // 提问者的 ID
  creationDate: string;
}

interface Answer {
  answerId: number;
  questionId: number; // 关联问题的 ID
  userId: number; // 回答者的 ID
  content: string; // 回答内容
  creationDate: string;
}

export default {
  setup() {
    const question = ref<Question | null>(null);
    const answers = ref<Answer[]>([]);
    const answerContent = ref('');
    const route = useRoute();

    const fetchQuestion = async () => {
      const response = await axios.get(`http://localhost:8080/api/questions/${route.params.id}`);
      question.value = response.data; // 假设后端返回数据包含 userId
      const answersResponse = await axios.get(`http://localhost:8080/api/questions/${route.params.id}/answers`);
      answers.value = answersResponse.data;
    };

    const submitAnswer = async () => {
      await axios.post(`http://localhost:8080/api/questions/${route.params.id}/answers`, { 
        content: answerContent.value,
        userId: localStorage.getItem('authToken') // 可以选择在回答中包含用户 ID
      });
      answerContent.value = '';
      fetchQuestion(); // 刷新回答
    };

    onMounted(fetchQuestion);

    return { question, answers, answerContent, submitAnswer };
  },
};
</script>

<style>
.question-detail-container {
  max-width: 800px; /* 最大宽度 */
  margin: 50px auto; /* 居中显示 */
  padding: 20px; /* 内边距 */
  background-color: #ffffff; /* 背景色 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影 */
}

.question-title {
  margin-bottom: 20px; /* 标题下边距 */
  font-size: 24px; /* 字体大小 */
  font-weight: bold; /* 字体加粗 */
}

.question-info {
  font-size: 14px; /* 字体大小 */
  color: #666; /* 字体颜色 */
  margin-bottom: 10px; /* 下边距 */
}

.question-content {
  font-size: 16px; /* 字体大小 */
  line-height: 1.5; /* 行高 */
  margin-bottom: 30px; /* 下边距 */
}

.answer-header {
  font-size: 20px; /* 字体大小 */
  margin-bottom: 15px; /* 下边距 */
}

.answer-list {
  list-style-type: none; /* 无序列表样式 */
  padding: 0; /* 内边距 */
}

.answer-item {
  background-color: #f9f9f9; /* 回答背景色 */
  padding: 10px; /* 内边距 */
  margin-bottom: 10px; /* 下边距 */
  border-radius: 4px; /* 圆角 */
}

.answer-form {
  margin-top: 20px; /* 顶部边距 */
}

.answer-textarea {
  width: 100%; /* 宽度 */
  padding: 10px; /* 内边距 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 4px; /* 圆角 */
  min-height: 100px; /* 最小高度 */
  resize: vertical; /* 允许垂直调整 */
}

.submit-button {
  padding: 10px 15px; /* 内边距 */
  background-color: #007bff; /* 按钮背景色 */
  color: white; /* 字体颜色 */
  border: none; /* 无边框 */
  border-radius: 4px; /* 圆角 */
  cursor: pointer; /* 鼠标光标 */
  transition: background-color 0.3s; /* 背景色过渡 */
}

.submit-button:hover {
  background-color: #0056b3; /* 悬停时背景色 */
}

.loading {
  text-align: center; /* 居中 */
  font-size: 18px; /* 字体大小 */
  color: #666; /* 字体颜色 */
}
</style>