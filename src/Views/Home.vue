<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h2 class="title"><span>Y</span>un-UI</h2>
        <h3>简约 轻巧 好用</h3>
        <p class="actions">
          <a href="https://github.com/xixixiaoyu/vue3-yun-ui">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用最新 Vue3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-vite"></use>
          </svg>
          <h3>基于 Vite</h3>
          <p>官网基于 Vite 构建</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-gj"></use>
          </svg>
          <h3>文档完整</h3>
          <p>所有组件拥有完整的使用文档和示例</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #039994;
.topnavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;
  padding: 0 45px;
  width: 500px;
  > ul > li {
    width: 100%;
  }
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1450px;
    > ul {
      > li {
        width: 25%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .title span {
    font-size: 32px;
    font-weight: 700;
    color: #36b1bf;
    font-style: italic;
    margin-right: 2px;
    text-decoration: underline;
  }

  > h3 {
    margin: 7px 0;
  }

  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
