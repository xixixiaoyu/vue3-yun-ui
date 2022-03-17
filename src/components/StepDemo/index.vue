<template>
  <h1>Step 示例</h1>
  <div>
    <Demo :component="Step1Demo" description="添加 count 和 active 和 width 属性即可控制步骤条" />
    <Attr :columns="columns" :data="data" />
  </div>
</template>

<script setup>
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import Step1Demo from "./Step1.demo.vue";
import { columns } from "../../lib/data";

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
    desc: "激活数量",
    type: "number",
    select: "number",
    default: "1",
  },
];
</script>
