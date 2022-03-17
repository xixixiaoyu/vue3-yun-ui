<demo>
基本使用
</demo>

<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航22">内容222</Tab>
    <Tab title="导航3333">内容333</Tab>
  </Tabs>
</template>

<script setup>
import { Tabs, Tab } from "../../lib/index";
import { ref } from "vue";

const selected = ref("导航1");
</script>
