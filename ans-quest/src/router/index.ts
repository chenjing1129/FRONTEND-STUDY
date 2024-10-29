import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Questions from '../views/Questions.vue';
import QuestionDetail from '../views/QuestionDetail.vue';
import AskQuestion from '../views/AskQuestion.vue';
import { ref } from 'vue';

const isAuthenticated = ref(false); // 用于检查用户登录状态

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/questions', component: Questions, meta: { requiresAuth: true } },
  { path: '/questions/:id', component: QuestionDetail, meta: { requiresAuth: true } },
  { path: '/ask', component: AskQuestion, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login'); // 如果未登录，重定向到登录页
  } else {
    next(); // 允许访问
  }
});

// 更新登录状态的方法
export const useAuth = () => {
  return {
    login() {
      isAuthenticated.value = true;
    },
    logout() {
      isAuthenticated.value = false;
    },
  };
};

export default router;