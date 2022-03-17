<demo>支持 maxlength</demo>

<template>
  <Input v-model:value="inputVal" :maxlength="5" placeholder="limit 5 characters" />
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
