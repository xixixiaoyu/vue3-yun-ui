<template>
  <div>Button 示例</div>
  <Demo :component="Button1Demo" title="基本用法" description="开关按钮的基本用法"/>
  <Demo :component="Button2Demo" title="按钮尺寸" description="提供三种不同尺寸的按钮"/>
  <Demo :component="Button3Demo" title="按钮类型" description="提供三种不同类型的按钮"/>
  <Demo :component="Button4Demo" title="不可用状态" description="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变"/>
  <Demo :component="Button5Demo" title="加载中状态" description="添加 loading 属性即可让按钮处于加载状态"/>
  <Demo :component="Button6Demo" title="加载中状态" description="添加 sword-loading 属性即可让按钮处于加载状态，添加 sword-loaded 属性加载完毕"/>
  <Demo :component="Button7Demo" title="加载中状态" description="添加 circle-loading 属性即可让按钮处于加载状态"/>
  
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import Button6Demo from "./Button6.demo.vue";
import Button7Demo from "./Button7.demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      Button6Demo,
      Button7Demo
    };
  },
};
</script>
