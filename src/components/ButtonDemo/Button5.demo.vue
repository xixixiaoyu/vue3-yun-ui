<demo>
支持显示加载中
</demo>
<template>
  <div>
    <Button loading>加载中</Button>
    <Button sword-loading>加载中</Button>
    <Button circle-loading>加载中</Button>
    <Button sword-loaded>加载完毕</Button>
    <Button>加载完毕</Button>
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
