<demo>
支持 disabled
</demo>

<template>
  <Switch v-model:value="bool" disabled />
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
