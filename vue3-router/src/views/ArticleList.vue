<template>
    <div class="article-list-container">
      <h2 class="list-title">文章列表</h2>
      <ul class="article-list">
        <li v-for="article in articles" :key="article.id" class="article-item">
          <router-link :to="`/articles/${article.id}`" class="article-link">
            {{ article.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  const articles = [
    {
      id: 1,
      title: "斗罗大陆",
    },
    {
      id: 2,
      title: "斗破苍穹"
    }
  ];
  </script>
  
  <style scoped>
  .article-list-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .list-title {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  
  .article-list {
    list-style-type: none;
    padding: 0;
  }
  
  .article-item {
    background-color: #fff;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .article-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .article-link {
    display: block;
    color: #333;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease-in-out;
  }
  
  .article-link:hover {
    color: #007bff;
  }
  </style>