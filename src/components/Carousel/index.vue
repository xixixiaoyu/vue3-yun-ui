<template>
  <h1>Carousel 示例</h1>

  <Demo :component="Carousel1Demo" />
  <Demo :component="Carousel2Demo" />

  <attr :columns="columns" :data="data"></attr>
</template>

<script setup>
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import Carousel1Demo from "./Carousel.scroll.demo.vue";
import Carousel2Demo from "./Carousel.perfect.demo.vue";

const data = [
  {
    params: "visible",
    desc: "是否展示",
    type: "boolean",
    select: "true / false",
    default: "false",
  },
  {
    params: "overlayClosable",
    desc: "点击蒙层是否关闭对话框",
    type: "boolean",
    select: "true / false",
    default: "true",
  },
  {
    params: "confirm",
    desc: "确认触发函数",
    type: "function",
    select: "() => {}",
    default: "一",
  },
  {
    params: "cancel",
    desc: "取消触发函数",
    type: "function",
    select: "() => {}",
    default: "一",
  },
  {
    params: "closeOverlay",
    desc: "蒙层关闭触发函数",
    type: "function",
    select: "() => {}",
    default: "一",
  },
];
</script>
