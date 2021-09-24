<template>
  <button class="gulu-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="gulu-loadingIndicator"></span>
    <div class="orbit-spinner" v-if="swordLoading">
      <div class="orbit"></div>
      <div class="orbit"></div>
      <div class="orbit"></div>
    </div>
    <div class="checked-style" v-if="swordLoaded"></div>
    <div class="circle-loading" v-if="circleLoading"></div>

    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    "sword-loading": {
      type: Boolean,
      default: false,
    },
    "sword-loaded": {
      type: Boolean,
      default: false,
    },
    "circle-loading": {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;

.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.gulu-theme-button {
    &.gulu-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-link {
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-text {
    &.gulu-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }

  &.gulu-theme-warning {
    background: #f3dd8d;
    color: #4a4444;
    &:hover,
    &:focus {
      border-color: #ebd27a;
      color: #524f4f;
      background-color: #f7e4a4;
    }
  }

  &.gulu-theme-primary {
    background: #8abae2;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #eeeeee;
      background-color: #72a5cf;
    }
  }
  &.gulu-theme-info {
    background: #52616b;
    border: 1px solid #393e46;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #eeeeee;
      border-color: #222831;
      background-color: #6c777d;
    }
  }

  &.gulu-theme-success {
    background: #4ecca3;
    border: 1px solid #393e46;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #eeeeee;
      border-color: #222831;
      background-color: #6be3bc;
    }
  }

  &.gulu-theme-danger {
    background: #d72323;
    border: 1px solid #d72323;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #eeeeee;
      border-color: #dd5656;
      background-color: #dd5656;
    }
  }

  &.gulu-theme-link,
  &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .gulu-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
}
@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* sword */
.orbit-spinner {
  display: inline-block;
  margin-right: 4px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  perspective: 800px;
  .orbit {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    &:nth-child(1) {
      left: 0%;
      top: 0%;
      animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
      border-bottom: 3px solid $blue;
    }
    &:nth-child(2) {
      right: 0%;
      top: 0%;
      animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
      border-right: 3px solid $blue;
    }
    &:nth-child(3) {
      right: 0%;
      bottom: 0%;
      animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
      border-top: 3px solid $blue;
    }
  }
}

@keyframes orbit-spinner-orbit-one-animation {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-two-animation {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-three-animation {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

/* checked */
.checked-style {
  margin-right: 4px;
  width: 6px;
  height: 10px;
  border-color: $blue;
  border-style: solid;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* circle-loading */
.circle-loading {
  position: relative;
  display: inline-block;
  margin-right: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border-top: 2px solid #ff6b6b;
  animation: gulu-spin 1s linear infinite;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: -2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }
  &::before {
    border-top: 2px solid #1dd1a1;
    transform: rotate(120deg);
  }
  &::after {
    border-top: 2px solid #54a0ff;
    transform: rotate(240deg);
  }
}
</style>
