import { createApp } from "vue";
import VueCookies from 'vue-cookies';
import App from "./App.vue";
import router from "./router";
const app = createApp(App)
//app.config.globalProperties.backend_host = "http://localhost:5000";
app.config.globalProperties.backend_host = "https://api.eltintero.co";
app.use(VueCookies, { expire: '7d'}).use(router).mount("#app");
