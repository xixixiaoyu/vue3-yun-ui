<demo>
支持 size
</demo>

<template>
  <div>
    <div>
      <Button size="big">超大按钮</Button>
      <Button>默认大小</Button>
      <Button size="small">超小按钮</Button>
    </div>
    <div>
      <Button theme="link" size="big">超大按钮</Button>
      <Button theme="link">默认大小</Button>
      <Button size="small" theme="link">超小按钮</Button>
    </div>
    <div>
      <Button size="big" theme="text">超大按钮</Button>
      <Button theme="text">默认大小</Button>
      <Button size="small" theme="text">超小按钮</Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from "../../lib/index";
</script>
