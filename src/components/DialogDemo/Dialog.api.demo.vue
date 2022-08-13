<demo>
函数式 API 打开 Dialog
</demo>

<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script setup>
import { openDialog } from "../../lib/index";

const showDialog = () => {
  openDialog({
    title: "标题",
    content: "文档内容",
    overlayClosable: false,
    confirm() {
      console.log("confirm");
      // return false;
    },
    cancel() {
      console.log("cancel");
    },
  });
};
</script>
