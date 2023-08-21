import { createApp } from "vue";
import App from "@/views/App";
import router from "@/router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/app.scss";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const main = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  main.component(key, component);
}

main.config.performance = process.env.NODE_ENV !== "production";
main.use(router);
main.use(ElementPlus);
main.mount("#app");
