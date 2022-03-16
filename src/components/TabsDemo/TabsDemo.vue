<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" title="tab切换" description="默认选中第一项。" />
  <attr :columns="columns" :data="data"></attr>
</template>

<script>
import Demo from "../Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
import { columns } from "../../lib/data";
import Attr from "../Attr.vue";
export default {
  components: {
    Demo,
    Attr,
  },
  setup() {
    const data = [
      {
        params: "Tabs",
        desc: "tab容器",
        type: "component",
        select: "一",
        default: "一",
      },
      {
        params: "Tab",
        desc: "tab页签",
        type: "component",
        select: "一",
        default: "一",
      },
      {
        params: "title",
        desc: "tab标题",
        type: "string",
        select: "一",
        default: "一",
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
