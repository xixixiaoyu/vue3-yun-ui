<demo>
基本使用
</demo>

<template>
  <Step :count="count" :active="active" width="90%"></Step>
  <Button @click="next">点击下一步</Button>
</template>

<script setup>
import { Step, Button } from "../../lib/index";
import { ref } from "vue";

const count = ref(4);
const active = ref(0);
const next = () => {
  active.value++;
};
</script>
