<template>
  <div class="backtotop" @click="onBacktop">
    <Icon name="backtop" />
  </div>
</template>

<script setup>
import Icon from "../Icon/Icon.vue";

let timer = null;
const onBacktop = () => {
  //设表先关
  clearInterval(timer);

  // 设置定时器
  timer = setInterval(function () {
    // 不断让scrollTop卷去的高度减少
    document.documentElement.scrollTop -= 50;

    //定时器要停
    if (document.documentElement.scrollTop <= 0) {
      clearInterval(timer);
    }
  }, 16);
};
</script>

<style lang="scss">
.backtotop {
  position: fixed;
  z-index: 1000;
  width: 80px;
  height: 80px;
  bottom: 20%;
  right: 20%;
  cursor: pointer;
  text-align: center;
  line-height: 80px;
  color: #fff;
  user-select: none;
}
.backtotop svg {
  width: 40px;
  height: 40px;
}
</style>
