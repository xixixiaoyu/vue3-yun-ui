<template>
  <div>
    <Demo :component="Step1Demo" title="步骤条组件" description="添加 loading 属性即可让按钮处于加载状态"/>
  </div>
</template>

<script>
import Demo from '../Demo.vue';
import Step1Demo from "./Step1.demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      Step1Demo
    }
  }
}
</script>