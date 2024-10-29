import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
const pinia = createPinia();
//持久化
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
pinia.use(piniaPluginPersistedState);
createApp(App).use(router).use(pinia).mount("#app");
