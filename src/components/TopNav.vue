<template>
  <div class="topnav">
    <router-link class="logo" to="/">
      <Icon name="yun"></Icon>
      <h1><span>Y</span>un-ui Vue</h1>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc/switch">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>
<script>
import { inject } from "vue";
import Icon from "../lib/Icon/Icon.vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
  components: { Icon },
};
</script>

<style lang="scss" scoped>
$color: #007974;

.topnav {
  color: $color;
  display: flex;
  padding: 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgb(226, 219, 219);
  > .logo {
    font-size: 30px;
    display: flex;
    max-width: 9em;
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
      top: 10px;
      left: 6px;
      margin-right: 8px;
      animation: movex 15s linear infinite alternate;
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
@keyframes movex {
  0% {
    transform: translateX(0);
  }
  55% {
    transform: translateX(-3px);
  }
  100% {
    transform: translateX(3px);
  }
}
</style>
