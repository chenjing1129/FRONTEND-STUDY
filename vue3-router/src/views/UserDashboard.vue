<template>
  <div class="user-container">
    <nav class="user-nav">
      <router-link to="/user/profile" class="nav-link">用户信息</router-link>
      <router-link to="/user/setting" class="nav-link">用户设置</router-link>
    </nav>
    <router-view class="user-content"></router-view>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ebf0f5;
}

.user-nav {
  display: flex;
  padding: 10px;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; // This will ensure the shadow doesn't get clipped

  .nav-link {
    color: #3182ce;
    text-decoration: none;
    margin-right: 20px;
    padding: 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      color: #2c5282;
      text-decoration: none;
      transform: scale(1.05); // Slight zoom effect on hover
    }

    &.router-link-active {
      font-weight: bold;
      color: #e53e3e; // Bright red for the active link
      background-color: #f5f5f5; // Light gray background for the active link
      border-radius: 4px; // Rounded corners for the active link
    }
  }
}

.user-content {
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

// 响应式设计
@media (max-width: 768px) {
  .user-nav {
    flex-direction: column;

    .nav-link {
      margin-bottom: 10px;
    }
  }
}
</style>