<template>
  <nav class="navbar">
    <router-link to="/home" class="nav-item">首页</router-link>
    <router-link to="/user" class="nav-item">我的</router-link>
    <router-link to="/books" class="nav-item">书籍列表</router-link>
    <router-link to="/cart" class="nav-item">购物车</router-link>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
/* 定义路由导航样式 */
.navbar {
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  z-index: 1000;
}

.nav-item {
  margin: 0 10px;
  text-decoration: none;
  color: #3baee0;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.nav-item:hover,
.nav-item:focus {
  background-color: #3baee0;
  color: white;
  font-weight: bold;
}

/* 自定义路由激活样式 */
.router-link-active {
  background-color: #3baee0;
  color: white;
  font-weight: bold;
}

/* 过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .nav-item {
    margin: 5px 0;
    width: 100%;
    text-align: center;
  }
}
</style>