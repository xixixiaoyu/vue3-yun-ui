<demo>支持 width</demo>

<template>
  <Input v-model:value="inputVal" width="100%" placeholder="width: 100%" />
</template>

<script setup>
import { ref } from "vue";
import { Input } from "../../lib/index";

const inputVal = ref("");
</script>
