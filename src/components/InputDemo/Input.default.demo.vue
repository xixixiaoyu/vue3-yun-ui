<demo>常规用法 v-model</demo>

<template>
  <Input v-model:value="inputVal" placeholder="please input username" />
  input value: {{ inputVal }}
</template>

<script setup>
import { ref } from "vue";
import { Input } from "../../lib/index";

const inputVal = ref("");
</script>
