<template>
  <indexTitle title="title" />

  <Demo :component="TableDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import indexTitle from "../indexTitle.vue";
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";

import TableDemo1 from "./Table.default.demo.vue";

const data = [
  {
    params: "placeholder",
    desc: "占位符",
    type: "string",
    select: "string",
    default: "请选择配送地址",
  },
];
</script>
