<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" title="tab切换" description="默认选中第一项。" />
  <Demo :component="Tabs2Demo" description="给对应 tab 组件添加 disabled 属性即可禁用对应哪项" />
  <attr :columns="columns" :data="data"></attr>
</template>

<script>
import Demo from "../Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
import Tabs2Demo from "./Tabs2.demo.vue";
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
      {
        params: "selected",
        desc: "当前选中项，与title对应",
        type: "string",
        select: "一",
        default: "一",
      },
      {
        params: "disabled",
        desc: "当前项禁用",
        type: "boolean",
        select: "true / false",
        default: "false",
      },
    ];
    return {
      Tabs1Demo,
      Tabs2Demo,
      columns,
      data,
    };
  },
};
</script>
