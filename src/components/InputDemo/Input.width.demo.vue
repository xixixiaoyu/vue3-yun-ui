<demo>支持 width</demo>

<template>
  <Input v-model:value="inputVal" width="100%" placeholder="width: 100%" />
</template>

<script>
import { ref } from "vue";
import { Input } from "../../lib/index";
export default {
  components: { Input },
  setup() {
    const inputVal = ref("");
    return { inputVal };
  },
};
</script>
