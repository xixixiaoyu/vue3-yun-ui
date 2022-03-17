<demo>
基本使用
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script setup>
import { Switch } from "../../lib/index";
import { ref } from "vue";

const bool = ref(true);
</script>
