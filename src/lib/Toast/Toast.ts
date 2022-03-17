import { createVNode, render, VNode } from "vue";
import ToastConstructor from "./ToastConstructor.vue";
import type { ToastProps } from "./toast.d";

const toastQueue: Array<VNode> = [];
let current = 1;

const Toast = (options: ToastProps) => {
  const _options = {
    ...options,
    id: `coast-toast-${current++}`,
  };
  createToast(_options);
};

const createToast = (options: ToastProps) => {
  const { destroyed = () => {}, ...rest } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const vm = createVNode(ToastConstructor, {
    ...rest,
    top: 10 + toastQueue.length * 60,
    onDestroy: () => {
      destroyed();
      onDestroy(options.id, div);
    },
  });
  toastQueue.push(vm);
  render(vm, div);
};

const onDestroy = (id: string, wrapper: HTMLDivElement) => {
  render(null, wrapper);
  wrapper.remove();
  const currentIndex = toastQueue.findIndex((item) => {
    return item.component.props.id === id;
  });
  if (currentIndex === -1) return;
  const h = toastQueue[currentIndex].el.offsetHeight;
  toastQueue.splice(currentIndex, 1);
  if (toastQueue.length < 1) return;
  for (let i = currentIndex; i < toastQueue.length; i++) {
    toastQueue[i].component.props.top = parseInt(toastQueue[i].el.style.top) - h - 60;
  }
};

export { Toast };
