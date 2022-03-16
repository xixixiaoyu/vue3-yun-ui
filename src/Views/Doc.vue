<template>
  <div class="layout">
    <Teleport to="body">
      <div class="aside-overlay" v-show="menuVisible && isPhone" @click="closeOverlay"></div>
    </Teleport>
    <Topnav class="nav" toggleMenuButtonVisible />
    <div class="content" :class="{ open: menuVisible }">
      <aside :class="{ open: menuVisible }">
        <h2>文档</h2>
        <ol class="intro">
          <li>
            <router-link to="/doc/get-started">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/intro">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/step">Step 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/layout">Layout 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/card">Card 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Topnav from "../components/TopNav.vue";
import { inject, computed } from "vue";
export default {
  components: { Topnav },
  setup() {
    const isPhone = computed(() => document.documentElement.clientWidth < 500);
    const menuVisible = inject("menuVisible"); // get
    const closeOverlay = () => {
      menuVisible.value = false;
    };

    return { menuVisible, closeOverlay, isPhone };
  },
};
</script>

<style lang="scss" scoped>
$asideIndex: 10;
.aside-overlay {
  position: fixed;
  top: 0;
  left: 160px;
  right: 0;
  bottom: 0;
  z-index: $asideIndex;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 36px;
    background: white;
  }
}
aside {
  transform: translateX(-160px);
  overflow: auto;
  background: #fff;
  width: 160px;
  padding: 16px 0;
  position: fixed;
  top: 53px;
  left: 0;
  // padding-top: 70px;
  height: 100%;
  z-index: 30;
  transition: 250ms;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  > h2 {
    margin-bottom: 8px;
    padding: 0 20px;
    font-weight: bold;
  }
  > ol {
    > li {
      text-align: left;
      text-indent: 6px;
      margin: 6px 0;
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: #fff;
        color: #36b1bf;
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }
}

main {
  overflow: auto;
}

aside.open {
  transform: translateX(0);
}

.intro {
  line-height: 1.6;
}
</style>
