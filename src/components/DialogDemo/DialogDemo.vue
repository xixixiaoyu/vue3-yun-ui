<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
  <Demo :component="Dialog3Demo" />
  <Demo :component="Dialog4Demo" />
  <attr :columns="columns" :data="data"></attr>
</template>

<script setup>
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import Dialog1Demo from "./Dialog.defalut.demo.vue";
import Dialog2Demo from "./Dialog.overlay.demo.vue";
import Dialog3Demo from "./Dialog.stop.demo.vue";
import Dialog4Demo from "./Dialog.api.demo.vue";
import { columns } from "../../lib/data";

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
