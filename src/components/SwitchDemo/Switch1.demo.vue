<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script>
import { Switch } from "../../lib/index";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(true);
    return {
      bool,
    };
  },
};
</script>
