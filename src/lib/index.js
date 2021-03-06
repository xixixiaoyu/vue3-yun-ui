/**
 * 初始化 rem 基准值，最大为 40px
 */
export const useREM = () => {
  // 定义最大的 fontSize
  const MAX_FONT_SIZE = 40;

  // 监听 html 文档被解析完成的事件
  document.addEventListener("DOMContentLoaded", () => {
    // 获取 html 标签
    const html = document.querySelector("html");
    // 获取根元素 fontSize 标准，屏幕宽度 / 10。（以 Iphone 为例 Iphone 6 屏幕宽度为 375，则标准 fontSize 为 37.5）
    let fontSize = window.innerWidth / 10;
    // 获取到的 fontSize 不允许超过我们定义的最大值
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;
    // 定义根元素（html）fontSize 的大小 （rem）
    html.style.fontSize = fontSize + "px";
  });
};

export { default as Switch } from "./Switch/Switch.vue";
export { default as Button } from "./Button/Button.vue";
export { default as ButtonGroup } from "./Button/ButtonGroup";
export { default as Tabs } from "./Tabs/Tabs.vue";
export { default as Tab } from "./Tabs/Tab.vue";
export { default as Dialog } from "./Dialog/Dialog.vue";
export { default as Step } from "./Step/Step.vue";
export { openDialog as openDialog } from "./Dialog/openDialog";
export { default as Input } from "./Input/Input.vue";
export { default as Card } from "./Card/Card.vue";
export { Toast } from "./Toast/Toast.ts";
export { default as CarouselBase } from "./Carousel/Carousel.opacity.vue";
export { default as CarouselScroll } from "./Carousel/Carousel.scroll.vue";
export { default as BackTop } from "./BackTop/BackTop.vue";
export { default as Skeleton } from "./Skeleton/Skeleton.vue";
export { default as Breadcrumb } from "./Breadcrumb/Breadcrumb.vue";
export { default as BreadcrumbItem } from "./Breadcrumb/BreadcrumbItem.vue";
export { default as Pagination } from "./Pagination/Pagination.vue";
export { default as City } from "./City/City.vue";
export { default as InfiniteLoading } from "./InfiniteLoading/InfiniteLoading.vue";
export { default as Sticky } from "./Sticky/Sticky.vue";
export { default as CountDown } from "./CountDown/CountDown.vue";
import Popover from "./Popover/Popover.vue";
import Icon from "../lib/Icon/Icon.vue";
const arrComponents = [Popover, Icon];
export default function (app) {
  arrComponents.forEach((component) => {
    app.component(component.name, component);
  });
}
