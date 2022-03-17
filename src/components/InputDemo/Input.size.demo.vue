<demo>支持 size</demo>

<template>
  <Input v-model:value="inputVal" placeholder="mini input" size="mini" /> <br />
  <Input v-model:value="inputVal" placeholder="small input" size="small" /><br />
  <Input v-model:value="inputVal" placeholder="medium input" size="medium" /><br />
  <Input v-model:value="inputVal" placeholder="large input" size="large" />
</template>

<script setup>
import { ref } from "vue";
import { Input } from "../../lib/index";

const inputVal = ref("");
</script>
