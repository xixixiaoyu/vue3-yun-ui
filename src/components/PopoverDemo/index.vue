<template>
  <h1>Popover 示例</h1>

  <Demo :component="PopoverDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import PopoverDemo1 from "./Popover.default.demo.vue";

const data = [
  {
    params: "placement",
    desc: "气泡出现位置",
    type: "string",
    select: "top-left | top-right | bottom-left |  bottom-right",
    default: "bottom-left",
  },
];
</script>
