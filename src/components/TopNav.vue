<template>
  <div class="topnav">
    <router-link class="logo" to="/">
      <svg class="icon">
        <use xlink:href="#icon-yun"></use>
      </svg>
      <h1><span>Y</span>un-ui</h1>
    </router-link>

    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #007974;

.topnav {
  color: $color;
  display: flex;

  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  @keyframes movex {
    0% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(6px);
    }
    70% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  > .logo {
    display: flex;
    max-width: 8em;
    margin-right: auto;
    vertical-align: middle;

    > h1 {
      white-space: nowrap;
      > span {
        font-size: 32px;
        font-weight: 700;
        color: #36b1bf;
        font-style: italic;
        margin-right: 2px;
      }
    }
    > svg {
      position: relative;
      top: 7px;
      width: 32px;
      height: 32px;
      margin-right: 8px;
      animation: movex 10s linear infinite alternate;
    }
    &:hover {
      animation-play-state: paused;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    /* background: fade-out(black, 0.9); */
    &:active {
      background-color: #b8dceb;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
