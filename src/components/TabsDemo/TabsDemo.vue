<template>
  <div>Tabs 示例</div>
  <Demo :component="Tabs1Demo" title="tab切换" description="默认选中第一项。" />
  <attr :columns="columns" :data="data"></attr>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
import { columns } from "../../lib/data";
import Attr from "../Attr.vue";
export default {
  components: {
    Demo, Attr
  },
  setup() {
    const data = [
      {
        params: "Tab",
        desc: "tab页签",
        type: "component",
        select: "Tab",
        default: "--",
      },
    ];
    return {
      Tabs1Demo,
      columns,
      data,
    };
  },
};
</script>
