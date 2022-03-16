<demo>
支持步骤条
</demo>

<template>
  <div>
    <Step :count="count" :active="active" width="90%"></Step>
    <Button @click="next">点击下一步</Button>
  </div>
</template>

<script>
import { Step, Button } from "../../lib/index";
import { ref } from "vue";
export default {
  components: { Step, Button },
  setup() {
    const count = ref(4);
    const active = ref(0);
    const next = () => {
      active.value++;
    };
    return {
      count,
      active,
      next,
    };
  },
};
</script>
