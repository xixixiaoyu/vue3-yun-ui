<template>
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body" v-if="!$slots.default">
      <li
        class="carousel-item"
        v-for="(item, i) in sliders"
        :key="i"
        :class="{ fade: index === i }"
      >
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
import { ref, watch, onUnmounted } from "vue";
import Icon from "../Icon/Icon.vue";
export default {
  name: "XtxCarousel",
  components: {
    Icon,
  },
  props: {
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
    loop: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // 默认显示的图片的索引
    const index = ref(0);

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
      if ((newIndex === -1 || newIndex >= props.sliders.length) && !props.loop) {
        return;
      } else {
        if (newIndex >= props.sliders.length) {
          index.value = 0;
          return;
        }
        if (newIndex < 0) {
          index.value = props.sliders.length - 1;
          return;
        }
      }

      index.value = newIndex;
    };

    // 组件消耗，清理定时器
    onUnmounted(() => {
      clearInterval(timer);
    });

    return { index, start, stop, toggle };
  },
};
</script>
<style lang="scss">
.xtx-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
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
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #77cef3;
        }
      }
    }
    &-btn {
      width: 30px;
      height: 44px;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 2;
      text-align: center;
      line-height: 44px;
      // opacity: 0;
      transition: all 0.5s;
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
