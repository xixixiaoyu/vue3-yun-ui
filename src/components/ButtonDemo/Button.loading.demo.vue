<demo>
   loading 属性加载
</demo>

<template>
  <div>
    <Button loading>加载中</Button>
    <Button circle-loading>加载中</Button>
    <Button swordLoading>加载中</Button>
    <Button swordLoaded>加载完毕</Button>
    <Button :loading="loading" @click="handleLoading">点击加载</Button>
  </div>
</template>

<script setup>
import { Button } from "../../lib/index";
import { ref } from "vue";
const loading = ref(false);

const handleLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
