<template>
    <div class="article-detail">
      <h2 class="article-title">{{ article?.title }}</h2>
      <p class="article-content">{{ article?.content }}</p>
      <router-link :to="`/articles/${article?.id}/comments`" class="comments-link">查看评论</router-link>
      <router-view class="comments-section"></router-view>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const articleId = route.params.id;
  const articles = [
    {
      id: 1,
      title: "如何学习vue3",
      content: "如何学习vue，vue3如何学习"
    },
    {
      id: 2,
      title: "理解Vue Router",
      content: "理解Vue Router，Router如何学习"
    }
  ];
  const article = articles.find((a) => a.id === Number(articleId));
  </script>
  
  <style scoped>
  .article-detail {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .article-title {
    margin-bottom: 16px;
    color: #333;
    font-size: 24px;
  }
  
  .article-content {
    margin-bottom: 20px;
    color: #666;
    font-size: 16px;
    line-height: 1.6;
  }
  
  .comments-link {
    display: inline-block;
    margin-bottom: 20px;
    color: #007bff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease-in-out;
  }
  
  .comments-link:hover {
    color: #0056b3;
  }
  
  .comments-section {
    background-color: #e9ecef;
    padding: 20px;
    border-radius: 4px;
  }
  </style>