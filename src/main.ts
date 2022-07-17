import "./lib/style/yun.scss";
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "github-markdown-css";
import RegisterComponent, { useREM } from "./lib/index";
import "virtual:svg-icons-register";

useREM();
const app = createApp(App);
RegisterComponent(app);
app.use(router);
app.mount("#app");
