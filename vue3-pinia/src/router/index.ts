import { createRouter, createWebHistory } from "vue-router";
import Counter from "../view/Counter.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/counter",
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../view/Todo.vue"),
  },

  {
    path: "/finance",
    name: "Finance",
    component: () => import("../view/Finance.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/Login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../view/Profile.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
