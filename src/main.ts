import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import pinia from "./store";

import router from "./router";
const app = createApp(App);

app.use(router).use(pinia).use(ElementPlus);
app.mount("#app");
