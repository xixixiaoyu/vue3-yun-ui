<demo>
常规使用
</demo>
<template>
  <div>
    <Button>默认按钮</Button>
    <Button theme="primary">主要按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
    <Button theme="warning">警告按钮</Button>
    <Button theme="info">信息按钮</Button>
    <Button theme="danger">危险按钮</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../../lib/index";
export default {
  components: {
    Button,
  },
};
</script>
