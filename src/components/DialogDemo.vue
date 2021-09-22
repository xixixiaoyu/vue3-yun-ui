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
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
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
    return {
      x,
      toggle,
      fn1,
      fn2,
    };
  },
};
</script>
