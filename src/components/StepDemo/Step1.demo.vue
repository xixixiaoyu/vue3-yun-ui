<demo>
基本使用
</demo>

<template>
  <div class="step-container">
    <Step :count="count" :active="active" width="80%" />
    <Button @click="next" style="margin-left: 60px">点击下一步</Button>
  </div>
</template>

<script setup>
import { Step, Button } from "../../lib/index";
import { ref } from "vue";

const count = ref(5);
const active = ref(0);
const next = () => {
  active.value++;
};
</script>
