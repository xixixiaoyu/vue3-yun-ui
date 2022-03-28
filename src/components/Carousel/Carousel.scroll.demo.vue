<demo>
  <title>滚动轮播基本使用</title>
  <desc>sliders 传入轮播数据，width、height 设置轮播高度，autoPlay、duration 设置自动轮播和间隔</desc>
</demo>

<template>
  <div class="home-banner">
    <CarouselScroll
      :sliders="sliders"
      width="1150"
      height="600"
      autoPlay
      :duration="2000"
    ></CarouselScroll>
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
      imgUrl: "//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg",
      hrefUrl: "carousel",
    },
    {
      id: "2",
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg",
      hrefUrl: "carousel",
    },
    {
      id: "3",
      imgUrl: "//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg",
      hrefUrl: "carousel",
    },
    {
      id: "4",
      imgUrl: "//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg",
      hrefUrl: "category",
    },
    {
      id: "5",
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg",
      hrefUrl: "carousel",
    },
  ];
});
</script>

<style lang="scss">
.home-banner {
  display: flex;
  justify-content: center;
}
</style>
