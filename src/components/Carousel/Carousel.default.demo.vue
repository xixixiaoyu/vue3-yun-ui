<demo>
  基本使用
</demo>

<template>
  <div class="home-banner">
    <Carousel :sliders="sliders"></Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Carousel } from "../../lib/index";

const sliders = ref([]);
onMounted(() => {
  sliders.value = [
    {
      id: "1",
      imgUrl: "https://s1.ax1x.com/2022/03/17/qPgegS.jpg",
      hrefUrl: "carousel",
    },
    {
      id: "2",
      imgUrl: "https://s1.ax1x.com/2022/03/17/qPg340.jpg",
      hrefUrl: "carousel",
    },
    {
      id: "3",
      imgUrl: "https://s1.ax1x.com/2020/09/26/0ir8ts.jpg",
      hrefUrl: "carousel",
    },
    {
      id: "4",
      imgUrl: "https://s1.ax1x.com/2020/09/26/0irm1P.jpg",
      hrefUrl: "category",
    },
    {
      id: "5",
      imgUrl: "https://s1.ax1x.com/2020/09/26/0irQ0g.jpg",
      hrefUrl: "carousel",
    },
  ];
});
</script>

<style lang="scss">
.home-banner {
  width: 1250px;
  height: 600px;
  margin: 0 auto;
}
</style>
