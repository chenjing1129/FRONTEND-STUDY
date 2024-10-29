<template>
    <div class="comments-container">
      <h2>{{ article?.title }}</h2>
      <ul class="comments-list">
        <li v-for="comment in article?.comments" :key="comment.id" class="comment-item">
          {{ comment.content }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const articleId = route.params.id;
  
  const articles = [
    {
      id: 1,
      title: "关于斗罗大陆的评论",
      content: "vue学习的具体内容",
      comments: [
        {
          id: 1,
          content: "Vue3语法很简洁"
        },
        {
          id: 2,
          content: "Vue3功能很强大"
        }
      ]
    },
    {
      id: 2,
      title: "关于router理解的评论",
      content: "router的具体内容",
      comments: [
        {
          id: 1,
          content: "router能够动态加载内容"
        },
        {
          id: 2,
          content: "router能够设置响应式导航"
        }
      ]
    }
  ];
  const article = articles.find((a) => a.id === Number(articleId));
  </script>
  
  <style scoped>
  .comments-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .comments-list {
    list-style-type: none;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
  
  .comment-item {
    background-color: #fff;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .comment-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .comment-item:last-child {
    margin-bottom: 0;
  }
  </style>