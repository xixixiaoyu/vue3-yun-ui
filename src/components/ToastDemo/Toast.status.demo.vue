<demo>
  <title>不同状态</title>
  <desc>包含的状态有 [normal, secondary, success, warning, error]</desc>
</demo>

<template>
  <Button @click="onClick1">普通 normal</Button>
  <Button @click="onClick2">次级 secondary</Button>
  <Button @click="onClick3">成功 success</Button>
  <Button @click="onClick4">警告 warning</Button>
  <Button @click="onClick5">错误 error</Button>
</template>

<script setup>
import { Toast, Button } from "../../lib/index";

const onClick1 = () => {
  Toast({ text: "这是一条普通的消息提示 ~", type: "normal" });
};
const onClick2 = () => {
  Toast({ text: "这是一条次要的消息提示 ~", type: "secondary" });
};
const onClick3 = () => {
  Toast({ text: "这是一条成功的消息提示 ~", type: "success" });
};
const onClick4 = () => {
  Toast({ text: "这是一条警告提示 ~", type: "warning" });
};
const onClick5 = () => {
  Toast({ text: "这是一条错误提示 ~", type: "error" });
};
</script>
