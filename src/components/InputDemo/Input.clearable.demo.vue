<demo>支持 clearable</demo>

<template>
  <Input v-model:value="inputVal" clearable @clear="handleClear" />
</template>

<script setup>
import { ref } from "vue";
import { Input } from "../../lib/index";

const inputVal = ref("this is clearable");
const handleClear = () => {
  console.log("input is clear");
};
</script>
