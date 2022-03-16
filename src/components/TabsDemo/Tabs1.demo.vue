<demo>
常规使用
</demo>

<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航22">内容222</Tab>
    <Tab title="导航3333">内容333</Tab>
  </Tabs>
</template>

<script>
import { Tabs, Tab } from "../../lib/index";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("导航1");
    return {
      x,
    };
  },
};
</script>
