<template>
  <div>
    <Demo :component="Form1" title="表单" description="表单控件"/>
  </div>
</template>

<script>
import Demo from '../Demo.vue';
import Form1 from "./Form1.demo.vue";
export default {
  components: {Demo},
  setup() {
    return {
      Form1
    }
  }
}
</script>