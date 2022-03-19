<template>
  <h1>Breadcrumb 示例</h1>

  <Demo :component="BreadcrumbDemo1" />
  <Demo :component="BreadcrumbDemo2" />

  <Attr :columns="columns" :data="data" />
</template>
<script setup>
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import BreadcrumbDemo1 from "./Breadcrumb.default.demo.vue";
import BreadcrumbDemo2 from "./Bread.separator.demo.vue";

const data = [
  {
    params: "to",
    desc: "跳转地址",
    type: "string / object",
    select: "string / object",
    default: "一",
  },
  {
    params: "separator",
    desc: "	分隔符",
    type: "	string",
    select: "string",
    default: "/",
  },
];
</script>
