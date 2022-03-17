<demo>
  支持无缝轮播
</demo>

<template>
  <div class="home-banner">
    <CarouselScroll :sliders="sliders" width="1250" height="600" :perfect="true"></CarouselScroll>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CarouselScroll } from "../../lib/index";

const sliders = ref([]);
onMounted(() => {
  sliders.value = [
    {
      id: "1",
      imgUrl: "https://s1.ax1x.com/2022/03/17/qPh86f.jpg",
      hrefUrl: "carousel",
    },
    {
      id: "2",
      imgUrl: "https://s1.ax1x.com/2022/03/17/qPhN7Q.jpg",
      hrefUrl: "carousel",
    },
    {
      id: "3",
      imgUrl: "https://s1.ax1x.com/2022/03/17/qPhwhn.jpg",
      hrefUrl: "carousel",
    },
    {
      id: "4",
      imgUrl: "https://s1.ax1x.com/2022/03/17/qPhsXT.jpg",
      hrefUrl: "category",
    },
    {
      id: "5",
      imgUrl: "https://s1.ax1x.com/2022/03/17/qPh6nU.jpg",
      hrefUrl: "carousel",
    },
  ];
});
</script>

<style lang="scss">
.home-banner {
  margin: 0 auto;
}
</style>
