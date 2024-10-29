<template>
  <div class="list-container">
    <ul class="list">
      <li v-for="(book, index) in cart" :key="book.id" class="item">
        <div class="book-info">
          <router-link :to="`/books/${book.id}`" class="book-title">{{ book.title }}</router-link>
          <p class="book-description">{{ book.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cart = ref([
  { id: 1, title: '斗罗大陆', description: '史莱克七怪' },
  { id: 2, title: '斗破苍穹', description: '莫欺少年穷' },
  { id: 3, title: '武动乾坤', description: '大荒囚天指' },
]);

const removeFromCart = (index: number) => {
  cart.value.splice(index, 1);
};
</script>

<style scoped>
.list-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fdfdfd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.item {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 6px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.book-info {
  display: flex;
  flex-direction: column;
  align-items: center; /* 添加此行代码使内容居中 */
  justify-content: center; /* 添加此行代码使内容居中 */
  text-align: center; /* 添加此行代码使文本居中 */
}

.book-title {
  color: #3498db;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-bottom: 10px; /* 添加此行代码增加书名和描述之间的间距 */
}

.book-title:hover {
  color: #2980b9;
  text-decoration: underline;
}

.book-description {
  color: #7f8c8d;
  font-size: 14px;
}

@media (max-width: 768px) {
  .list-container {
    padding: 10px;
  }

  .item {
    padding: 10px;
  }
}
</style>