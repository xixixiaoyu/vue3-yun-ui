<demo>
  <title>支持 disabled</title>
  <desc>添加 disabled 属性即可禁用</desc>
</demo>

<template>
  <Switch v-model:value="bool" disabled />
</template>

<script setup>
import { Switch } from "../../lib/index";
import { ref } from "vue";

const bool = ref(true);
</script>
