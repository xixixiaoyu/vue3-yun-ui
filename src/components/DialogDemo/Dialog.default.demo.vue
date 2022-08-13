<demo>
基本使用
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="visible" :confirm="handleConfirm" :cancel="handleCancel">
      <template v-slot:content>
        <strong>文本框第一行 </strong>
        <div>文本框第二行</div>
      </template>
      <template v-slot:title>
        <strong>标题</strong>
      </template>
    </Dialog>

    <Button @click="handleIsShow">有动画的打开对话框</Button>
    <MyDialog
      title="标题"
      v-model="isShow"
      confirmText="确认"
      cancelText="取消"
      :cancelHandler="() => {}"
    >
      我是内容
    </MyDialog>
  </div>

  <div></div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

const handleConfirm = () => {
  console.log("onConfirm");
};
const handleCancel = () => {
  console.log("onCancel");
};

const isShow = ref(false);

const handleIsShow = () => {
  isShow.value = !isShow.value;
};
</script>
