<template>
  <h1>Pagination 示例</h1>

  <Demo :component="PaginationDemo1" />
  <Demo :component="PaginationDemo2" />
  <Demo :component="PaginationDemo3" />

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script setup>
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import PaginationDemo1 from "./Pagination.default.demo.vue";
import PaginationDemo2 from "./Pagination.attr.demo.vue";
import PaginationDemo3 from "./Pagination.event.demo.vue";

const data = [
  {
    params: "showCount",
    desc: "展示按钮数量",
    type: "number",
    select: "number",
    default: "5",
  },
  {
    params: "total",
    desc: "总条数",
    type: "number",
    select: "number",
    default: "100",
  },
  {
    params: "pageSize",
    desc: "每页条数",
    type: "number",
    select: "number",
    default: "10",
  },
  {
    params: "currentPage",
    desc: "当前页码",
    type: "number",
    select: "number",
    default: "1",
  },
  {
    params: "current-change",
    desc: "页码点击回调事件",
    type: "function",
    select: "(page) => {}",
    default: "(page) => {}",
  },
];
</script>
