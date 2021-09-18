<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <Button @click="handleClick" size="small" @mouseEnter="handleClick">我是btn</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  methods: {
    handleClick() {
      console.log("handleClick");
      
    }
  }
};
</script>
