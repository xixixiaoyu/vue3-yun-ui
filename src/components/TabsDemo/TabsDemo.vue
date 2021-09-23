<template>
  <div>Tabs 示例</div>
  <Demo :component="Tabs1Demo" title="tab切换" description="默认选中第一项。"/>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
    };
  },
};
</script>
