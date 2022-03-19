<template>
  <div class="lg-steps">
    <div class="lg-steps-line"></div>
    <div
      class="lg-step"
      v-for="index in count"
      :key="index"
      :style="{ color: active >= index ? activeColor : defaultColor }"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "YunStep",
  props: {
    count: {
      type: Number,
      default: 3,
    },
    active: {
      type: Number,
      default: 0,
    },
    activeColor: {
      type: String,
      default: "green",
    },
    defaultColor: {
      type: String,
      default: "#3fa8d3",
    },
    width: {
      type: String,
      default: "100%",
    },
  },
  setup(props) {
    const color = computed(() => props.width);
    return {
      color,
    };
  },
};
</script>

<style>
.lg-steps {
  width: v-bind(color);
  padding: 20px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.lg-steps-line {
  position: absolute;
  height: 2px;
  top: 50%;
  left: 24px;
  right: 24px;
  transform: translateY(-50%);
  z-index: 1;
  background: rgb(223, 231, 239);
}

.lg-step {
  border: 2px solid;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 2;
  background-color: white;
  box-sizing: border-box;
}
</style>
