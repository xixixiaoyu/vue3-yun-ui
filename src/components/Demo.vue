<template>
  <div class="demo-container">
    <h2>{{ title || component.__sourceCodeTitle }}</h2>
    <p>{{ description || component.__sourceDescription }}</p>
    <!--展示代码的地方-->
    <code-per ref="codePer" :component="component"></code-per>
  </div>
</template>

<script>
import CodePer from "./Codeper.vue";
export default {
  name: "demo-doc",
  components: { CodePer },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
      default: "",
    },
    component: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-container {
  //padding: 40px;
  h2 {
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 14px 0;
  }
}
</style>
