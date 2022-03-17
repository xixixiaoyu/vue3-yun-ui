<demo>password 密码框</demo>

<template>
  <Input type="password" v-model:value="inputVal" placeholder="please input password" />
</template>

<script setup>
import { ref } from "vue";
import { Input } from "../../lib/index";

const inputVal = ref("this is password");
</script>
