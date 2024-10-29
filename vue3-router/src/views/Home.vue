<template>
  <div class="home-container">
    <h1 class="home-title">首页</h1>
    <p class="welcome-message">欢迎来到网上书店！发现您下一个最爱的故事。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #f4f4f9 0%, #e6e6f7 100%);
  margin-top: 12px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.1);
}

.home-title {
  color: #333;
  font-size: 36px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 800; /* 加粗字体 */
}

.welcome-message {
  color: #666;
  font-size: 20px;
  max-width: 600px;
  text-align: center;
  line-height: 1.6;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.welcome-message:hover {
  transform: scale(1.02); /* 鼠标悬停时轻微放大 */
}

/* 添加一个简单的动画效果 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-container {
  animation: fadeInDown 0.8s ease-out forwards;
}
</style>