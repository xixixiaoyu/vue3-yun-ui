<template>
  <h1>Step 示例</h1>
  <div>
    <Demo
      :component="Step1Demo"
      title="步骤条组件"
      description="添加 count 和 active 属性即可控制步骤条"
    />

    <Attr :columns="columns" :data="data" />
  </div>
</template>

<script>
import Demo from "../Demo.vue";
import Step1Demo from "./Step1.demo.vue";
import { columns } from "../../lib/data";
import Attr from "../Attr.vue";
export default {
  components: { Demo, Attr, Step1Demo },
  setup() {
    const data = [
      {
        params: "count",
        desc: "步骤数量",
        type: "number",
        select: "number",
        default: "3",
      },
      {
        params: "active ",
        desc: "是否激活",
        type: "number",
        select: "number",
        default: "1",
      },
    ];
    return {
      Step1Demo,
      data,
      columns,
    };
  },
};
</script>
