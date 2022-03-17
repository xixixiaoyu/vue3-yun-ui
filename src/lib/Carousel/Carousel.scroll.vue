<template>
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body" ref="carouselBody" :style="{ left: offseLeft }">
      <li class="carousel-item" v-for="(item, i) in sliders" :key="item.id">
        <RouterLink v-if="item.hrefUrl" :to="item.hrefUrl">
          <img :src="item.imgUrl" />
        </RouterLink>
      </li>
    </ul>

    <!-- 小圆点 -->
    <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)">
      <Icon name="zuojiantou" />
    </a>
    <a href="javascript:;" class="carousel-btn next" @click="toggle(1)">
      <Icon name="youjiantou1" />
    </a>
    <!-- 小圆点 -->
    <div class="carousel-indicator">
      <span
        v-for="(item, i) in sliders"
        :key="i"
        @click="index = i"
        :class="{ active: index === i }"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed, onUnmounted } from "vue";
import Icon from "../Icon/Icon.vue";
export default {
  name: "XtxCarousel",
  components: {
    Icon,
  },
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    perfect: {
      type: Boolean,
      default: false,
    },
    sliders: {
      type: Array,
      default: () => [],
    },
    duration: {
      type: Number,
      default: 3000,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    scroll,
  },
  setup(props) {
    const carouselBody = ref(null);
    // 默认显示的图片的索引
    const index = ref(0);
    const wrapWidth = props.width + "px";
    const wrapHeight = props.height + "px";
    const offseLeft = computed(() => -props.width * index.value + "px");
    const perfect = props.perfect;
    perfect &&
      setTimeout(() => {
        let clonefirstImg = carouselBody.value.firstElementChild.cloneNode(true);
        // 将第一张图片添加至图片列表的末尾
        carouselBody.value.appendChild(clonefirstImg);
      });

    // 自动播放
    let timer = null;
    const autoPlayFn = () => {
      clearInterval(timer);
      timer = setInterval(() => {
        index.value++;
        if (index.value >= props.sliders.length) {
          index.value = 0;
        }
      }, props.duration);
    };

    watch(
      () => props.sliders,
      (newVal) => {
        // 有数据&开启自动播放，才调用自动播放函数
        if (newVal.length && props.autoPlay) {
          index.value = 0;
          autoPlayFn();
        }
      },
      { immediate: true }
    );

    // 鼠标进入停止，移出开启自动，前提条件：autoPlay为true
    const stop = () => {
      if (timer) clearInterval(timer);
    };
    const start = () => {
      if (props.sliders.length && props.autoPlay) {
        autoPlayFn();
      }
    };

    // 上一张下一张
    const toggle = (step) => {
      const newIndex = index.value + step;
      if (!perfect) {
        if (newIndex >= props.sliders.length) {
          index.value = 0;
          return;
        }
        if (newIndex < 0) {
          index.value = props.sliders.length - 1;
          return;
        }
        index.value = newIndex;
      } else {
        carouselBody.value.style.transition = "300ms";
        if (newIndex === -1) {
          carouselBody.value.style.transition = "none";
          carouselBody.value.style.left = props.sliders.length * -props.width + "px";
          setTimeout(() => {
            index.value = props.sliders.length - 1;
            carouselBody.value.style.transition = "300ms";
            carouselBody.value.style.left = index.value * -props.width + "px";
          }, 0);
        } else if (newIndex === props.sliders.length) {
          carouselBody.value.style.left = props.sliders.length * -props.width + "px";
          setTimeout(() => {
            index.value = 0;
            carouselBody.value.style.transition = "none";
            carouselBody.value.style.left = "0px";
          }, 300);
        } else {
          index.value = newIndex;
        }
      }
    };

    // 组件消耗，清理定时器
    onUnmounted(() => {
      clearInterval(timer);
    });

    return { carouselBody, index, start, stop, toggle, wrapWidth, wrapHeight, offseLeft };
  },
};
</script>
<style lang="scss">
.xtx-carousel {
  overflow: hidden;
  position: relative;
  width: v-bind(wrapWidth);
  height: v-bind(wrapHeight);
  .carousel-body {
    position: relative;
    transition: 300ms;
  }
  .carousel {
    &-body {
      display: flex;
      width: 100%;
      height: 100%;
    }
    &-item {
      width: v-bind(wrapWidth);
      height: v-bind(wrapHeight);
      img {
        width: v-bind(wrapWidth);
        height: v-bind(wrapHeight);
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #5fb6db;
        }
      }
    }
    &-btn {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      display: block;
      width: 40px;
      height: 70px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      user-select: none;
      font-size: 50px;
      text-align: center;
      line-height: 70px;
      text-decoration: none;
      z-index: 100;
      svg {
        width: 30px;
        height: 30px;
      }
      &.prev {
        left: 10px;
      }
      &.next {
        right: 10px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
// 轮播商品
.slider {
  display: flex;
  justify-content: space-around;
  padding: 0 40px;
  > a {
    width: 240px;
    text-align: center;
    img {
      padding: 20px;
      width: 230px !important;
      height: 230px !important;
    }
    .name {
      font-size: 16px;
      color: #666;
      padding: 0 40px;
    }
    .price {
      font-size: 16px;
      color: orange;
      margin-top: 15px;
    }
  }
}
</style>
