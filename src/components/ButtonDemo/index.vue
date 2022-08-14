<template>
  <indexTitle
    title="Button"
    subTitle="这里仅用了一个元素来实现这个组件，我希望 Yun-ui 是极简的。"
  />

  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button3Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />
  <Demo :component="Button6Demo" />

  <Attr :columns="columns" :data="data" />
</template>
<script setup>
import indexTitle from "../indexTitle.vue";
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import Button1Demo from "./Button.default.demo.vue";
import Button2Demo from "./Button.size.demo.vue";
import Button3Demo from "./Button.level.demo.vue";
import Button4Demo from "./Button.disabled.demo.vue";
import Button5Demo from "./Button.loading.demo.vue";
import Button6Demo from "./Button.group.demo.vue";
import { columns } from "../../lib/data";

const data = [
  {
    params: "size",
    desc: "尺寸",
    type: "string",
    select: "normal / big / small",
    default: "normal",
  },
  {
    params: "level",
    desc: "按钮类型",
    type: "string",
    select: "normal / main / warning / danger ",
    default: "normal",
  },
  {
    params: "theme",
    desc: "按钮类型",
    type: "string",
    select: "normal / link / text",
    default: "normal",
  },
  {
    params: "disabled",
    desc: "是否禁用",
    type: "boolean",
    select: "false / true",
    default: "false",
  },
  {
    params: "loading",
    desc: "加载中",
    type: "boolean",
    select: "false / true",
    default: "false",
  },
  {
    params: "sword-loading",
    desc: "加载中",
    type: "boolean",
    select: "false / true",
    default: "false",
  },
  {
    params: "circle-loading",
    desc: "加载中",
    type: "boolean",
    select: "false / true",
    default: "false",
  },
  {
    params: "sword-loaded",
    desc: "加载中",
    type: "boolean",
    select: "false / true",
    default: "false",
  },
];
</script>
