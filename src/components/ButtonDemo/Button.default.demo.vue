<demo>
  <title>基本使用</title>
  <desc>使用 theme 属性指定按钮类型</desc>
</demo>

<template>
  <div>
    <Button>默认按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
  </div>
</template>

<script setup>
import { Button } from "../../lib/index";
</script>
