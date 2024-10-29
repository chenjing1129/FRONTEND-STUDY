import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<{ username: string; userId: number } | null>(null);

  const setUser = (username: string, userId: number) => {
    userInfo.value = { username, userId };
  };

  const clearUser = () => {
    userInfo.value = null;
  };

  return { userInfo, setUser, clearUser };
});