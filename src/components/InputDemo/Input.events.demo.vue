<demo>Input events</demo>

<template>
  <Input
    v-model:value="inputVal"
    placeholder="please input content"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeydown"
  />
</template>

<script setup>
import { ref } from "vue";
import { Input } from "../../lib/index";

const inputVal = ref("");

const handleInput = (value) => {
  console.log("input event", value);
};
const handleChange = (value) => {
  console.log("change event", value);
};
const handleBlur = (event) => {
  console.log("blur event", event);
};
const handleFocus = (event) => {
  console.log("focus event", event);
};
const handleKeydown = (event) => {
  console.log("keydown event", event);
};
</script>
