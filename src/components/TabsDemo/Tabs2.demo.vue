<demo>
支持 disabled
</demo>

<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航22" disabled>内容2</Tab>
    <Tab title="导航333">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
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
