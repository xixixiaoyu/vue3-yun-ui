<demo>
基本使用
</demo>

<template>
  <div class="flex justify-evenly">
    <Popover v-for="(position, index) in positionArr" :placement="position">
      <template #reference>
        <span class="align-middle block text-center">{{ position }}</span>
        <img :src="imgUrl[index]" class="w-7 p-0.5 cursor-pointer rounded-md align-middle" />
      </template>

      <div class="w-[140px] overflow-hidden">
        <div
          class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-300"
          v-for="innerItem in themeArr"
        >
          <Icon
            :name="innerItem.icon"
            class="w-1.5 h-1.5 mr-1"
            extraClass="fill-zinc-900 dark:fill-zinc-300"
          ></Icon>
          <span class="text-zinc-800 text-sm"> {{ innerItem.name }}</span>
        </div>
      </div>
    </Popover>
  </div>
</template>

<script setup>
// 渲染数据源
const themeArr = [
  {
    id: "0",
    icon: "theme-light",
    name: "极简白",
  },
  {
    id: "1",
    icon: "theme-dark",
    name: "极夜黑",
  },
  {
    id: "2",
    icon: "theme-system",
    name: "跟随系统",
  },
];

// 指定图片列表
const imgUrl = [
  "//tva2.sinaimg.cn/mw690/007c1Ltfgy1h4a6gg3r12j30u00u0ta3.jpg",
  "//tvax1.sinaimg.cn/mw690/007c1Ltfgy1h4aei7d8xrj305j05j3yj.jpg",
  "//tvax3.sinaimg.cn/mw690/007c1Ltfgy1h4aej1ylr0j30hs0hsmxp.jpg",
  "//tva4.sinaimg.cn/mw690/007c1Ltfgy1h4aeom7w1oj30u00u0q74.jpg",
];

const PROP_TOP_LEFT = "top-left";
const PROP_TOP_RIGHT = "top-right";
const PROP_BOTTOM_LEFT = "bottom-left";
const PROP_BOTTOM_RIGHT = "bottom-right";

// 定义指定位置
const positionArr = [PROP_TOP_LEFT, PROP_TOP_RIGHT, PROP_BOTTOM_LEFT, PROP_BOTTOM_RIGHT];
</script>

<style lang="scss" scoped></style>
