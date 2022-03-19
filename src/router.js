import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo/index.vue";
import ButtonDemo from "./components/ButtonDemo/index.vue";
import DialogDemo from "./components/DialogDemo/index.vue";
import TabsDemo from "./components/TabsDemo/index.vue";
import StepDemo from "./components/StepDemo/index.vue";
import LayoutDemo from "./components/LayoutDemo/index.vue";
import CardDemo from "./components/CardDemo/index.vue";
import InputDemo from "./components/InputDemo/index.vue";
import ToastDemo from "./components/ToastDemo/index.vue";
import CarouselDemo from "./components/Carousel/index.vue";
import BackTopDemo from "./components/BackTopDemo/index.vue";
import GridDemo from "./components/GridDemo/index.vue";
import SkeletonDemo from "./components/SkeletonDemo/index.vue";
import BreadcrumbDemo from "./components/BreadcrumbDemo/index.vue";
import { h } from "vue";
import Markdown from "./components/Markdown.vue";
import intro from "./markdown/intro.md";
import getStarted from "./markdown/get-started.md";
import install from "./markdown/install.md";
const md = (string) => h(Markdown, { content: string, key: string });

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "step", component: StepDemo },
        { path: "layout", component: LayoutDemo },
        { path: "card", component: CardDemo },
        { path: "input", component: InputDemo },
        { path: "toast", component: ToastDemo },
        { path: "carousel", component: CarouselDemo },
        { path: "backtop", component: BackTopDemo },
        { path: "grid", component: GridDemo },
        { path: "skeleton", component: SkeletonDemo },
        { path: "breadcrumb", component: BreadcrumbDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  // console.log("路由切换了");
});
