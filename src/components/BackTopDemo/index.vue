<template>
  <h1>BackTop 示例</h1>

  <Demo :component="BackDemo1" />

  <Attr :columns="columns" :data="data" />

  <div style="height: 3000px"></div>
</template>
<script setup>
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import BackDemo1 from "./Back.default.demo.vue";

const data = [
  {
    params: "size",
    desc: "尺寸",
    type: "string",
    select: "normal / big / small",
    default: "normal",
  },
];
</script>
