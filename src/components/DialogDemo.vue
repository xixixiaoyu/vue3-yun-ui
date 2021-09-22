<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="fn1"
    :cancel="fn2"
  >
    <!-- <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      我的内容
    </template> -->
  </Dialog>

  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import { ref, h } from "vue";
import Dialog from "../lib/Dialog.vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Dialog,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      console.log(1);
      return false;
    };
    const fn2 = () => {
      console.log(2);
    };

    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      x,
      toggle,
      fn1,
      fn2,
      showDialog
    };
  },
};
</script>
