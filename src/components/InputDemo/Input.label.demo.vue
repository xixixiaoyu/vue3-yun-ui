<demo>支持 label</demo>

<template>
  <Input v-model:value="value1" placeholder="EnochQin" label="userName" /> <br />
  <Input v-model:value="value2" placeholder="http://yun-ui-y2y7" labelRight=".com" /><br />
  <Input v-model:value="value3" placeholder="yun-ui.y2y7" label="http://" labelRight=".com" />
</template>

<script setup>
import { ref } from "vue";
import { Input } from "../../lib/index";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
</script>
