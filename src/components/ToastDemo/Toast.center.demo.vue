<demo>
  <title>文字居中</title>
  <desc>使用 center 属性让文字水平居中</desc>
</demo>

<template>
  <Button @click="onClick">打开 toast</Button>
</template>

<script setup>
import { Toast, Button } from "../../lib/index";

const onClick = () => {
  Toast({ text: "这是一条居中的消息提示~", center: true });
};
</script>
