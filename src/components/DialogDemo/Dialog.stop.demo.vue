<demo>
阻止确认框和监听遮罩关闭
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog
      v-model:visible="visible"
      :confirm="handleConfirm"
      :cancel="handleCancel"
      @closeOverlay="hanleOverlay"
    >
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

const handleConfirm = () => {
  console.log("onConfirm");
  return false;
};
const handleCancel = () => {
  console.log("onCancel");
};

const hanleOverlay = () => {
  console.log("遮罩关闭了");
};
</script>
