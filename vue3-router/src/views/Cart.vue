<template>
  <div class="cart-container">
    <h1 class="cart-title">购物车</h1>
    <ul class="cart-list">
      <li v-for="(book, index) in cart" :key="book.id" class="cart-item">
        <div class="book-info">
          <router-link :to="`/books/${book.id}`" class="book-title">{{ book.title }}</router-link>
          <p class="book-description">{{ book.description }}</p>
        </div>
        <button class="remove-button" @click="removeFromCart(index)">删除</button>
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
.cart-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: linear-gradient(135deg, #fdf9f3 0%, #e0e0e0 100%);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.cart-title {
  text-align: center;
  color: #2c3e50;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 700;
}

.cart-list {
  list-style-type: none;
  padding: 0;
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.cart-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.book-info {
  flex-grow: 1;
}

.book-title {
  margin: 0 0 10px;
  color: #e74c3c;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.book-title:hover {
  color: #c0392b;
  text-decoration: underline;
}

.book-description {
  margin: 0;
  color: #7f8c8d;
  font-size: 14px;
}

.remove-button {
  background-image: linear-gradient(45deg, #3498db, #2980b9);
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  outline: none;
}

.remove-button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}

.remove-button:active {
  transform: scale(0.95);
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);
}

@media (max-width: 768px) {
  .cart-container {
    margin: 10px;
    padding: 10px;
  }

  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .book-info {
    margin-bottom: 10px;
  }
}
</style>