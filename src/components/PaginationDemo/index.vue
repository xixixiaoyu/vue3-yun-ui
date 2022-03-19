<template>
  <h1>Pagination 示例</h1>

  <Demo :component="PaginationDemo1" />

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script setup>
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import PaginationDemo1 from "./Pagination.default.demo.vue";

const data = [
  {
    params: "width",
    desc: "宽度",
    type: "string",
    select: "string",
    default: "100",
  },
  {
    params: "height",
    desc: "高度",
    type: "string",
    select: "string",
    default: "100",
  },
  {
    params: "bg",
    desc: "背景颜色",
    type: "string",
    select: "string",
    default: "#efefef",
  },
  {
    params: "animated",
    desc: "是否开启闪烁动画",
    type: "boolean",
    select: "true / false",
    default: "false",
  },
];
</script>
