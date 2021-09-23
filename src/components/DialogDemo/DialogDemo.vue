<template>
  <div>Dialog 示例</div>
  <Demo :component="Dialog1Demo" title="基本用法" description="弹出一个对话框"/>
  <Demo :component="Dialog2Demo" title="函数式调用" description="隐藏dom结构，只暴露出调用的api"/>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>
