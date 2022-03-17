<template>
  <button :class="classes" :disabled="disabled || loading" class="coast-button">
    <span v-if="loading" class="yun-loadingIndicator"></span>
    <div class="orbit-spinner" v-if="swordLoading">
      <div class="orbit"></div>
      <div class="orbit"></div>
      <div class="orbit"></div>
    </div>
    <div class="checked-style" v-if="swordLoaded"></div>
    <div class="circle-loading" v-if="circleLoading"></div>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>
<script lang="ts">
import type { PropType } from "vue";
import { defineComponent, computed } from "vue";
import "./style/Button.scss";

type ButtonThemeType = "button" | "link" | "text";
type ButtonSizeType = "normal" | "big" | "small";
type ButtonLevelType = "normal" | "main" | "danger" | "warning";
interface ButtonProps {
  theme: ButtonThemeType;
  size: ButtonSizeType;
  level: ButtonLevelType;
  disabled: boolean;
  loading: boolean;
}
export default defineComponent({
  name: "YunButton",
  props: {
    theme: {
      type: String as PropType<ButtonThemeType>,
      default: "button",
      validator: (val: string) => {
        return ["button", "link", "text"].includes(val);
      },
    },
    size: {
      type: String as PropType<ButtonSizeType>,
      default: "normal",
      validator: (val: string) => {
        return ["normal", "big", "small"].includes(val);
      },
    },
    level: {
      type: String as PropType<ButtonLevelType>,
      default: "normal",
      validator: (val: string) => {
        return ["normal", "main", "danger", "warning"].includes(val);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    swordLoaded: {
      type: Boolean,
      default: false,
    },
    circleLoading: {
      type: Boolean,
      default: false,
    },
    swordLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: ButtonProps) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`coast-button-theme-${theme}`]: theme,
        [`coast-button-size-${size}`]: size,
        [`coast-button-level-${level}`]: level,
        "coast-button-loading": props.loading,
      };
    });
    return { classes };
  },
});
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
</style>
