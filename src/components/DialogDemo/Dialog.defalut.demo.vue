<demo>
基本使用
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="visible" :confirm="hanleConfirm" :cancel="handleCancel">
      <template v-slot:content>
        <strong>文本框第一行 </strong>
        <div>文本框第二行</div>
      </template>
      <template v-slot:title>
        <strong>标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { Button, Dialog } from "../../lib/index";
import { ref } from "vue";

const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

const hanleConfirm = () => {
  console.log("onConfirm");
};
const handleCancel = () => {
  console.log("onCancel");
};
</script>
