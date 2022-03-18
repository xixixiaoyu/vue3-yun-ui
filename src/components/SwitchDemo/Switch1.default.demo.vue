<demo>
  <title>基本使用</title>
  <desc>会呼吸的开关</desc>
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script setup>
import { Switch } from "../../lib/index";
import { ref } from "vue";

const bool = ref(true);
</script>
