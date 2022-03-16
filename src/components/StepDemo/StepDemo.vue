<template>
  <h1>Step示例</h1>
  <div>
    <Demo
      :component="Step1Demo"
      title="步骤条组件"
      description="添加 loading 属性即可让按钮处于加载状态"
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
  components: { Demo, Attr },
  setup() {
    const data = [
      {
        params: "count",
        desc: "几个步骤",
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
