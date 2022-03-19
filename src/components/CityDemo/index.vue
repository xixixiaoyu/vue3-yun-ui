<template>
  <h1>City 示例</h1>

  <Demo :component="CityDemo1" />

  <Attr :columns="columns" :data="data" />
</template>
<script setup>
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import CityDemo1 from "./City.default.demo.vue";

const data = [
  {
    params: "visibility-height",
    desc: "滚动高度大于此参数值才出现",
    type: "number",
    select: "number",
    default: "100",
  },
  {
    params: "right",
    desc: "	控制其显示位置，距离页面右边距",
    type: "	string",
    select: "string",
    default: "20",
  },
  {
    params: "bottom",
    desc: "	控制其显示位置，距离页面下边距",
    type: "	string",
    select: "string",
    default: "16",
  },
  {
    params: "clicked",
    desc: "	点击按钮回传触发的事件",
    type: "	function",
    select: "() => {}",
    default: "() => {}",
  },
];
</script>
