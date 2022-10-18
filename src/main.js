import { createApp } from "vue";
import VueCookies from 'vue-cookies';
import App from "./App.vue";
import router from "./router";
createApp(App).use(VueCookies, { expire: '7d'}).use(router).mount("#app");
