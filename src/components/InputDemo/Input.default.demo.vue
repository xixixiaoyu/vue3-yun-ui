<demo>常规用法 v-model</demo>

<template>
  <Input v-model:value="inputVal" placeholder="please input username" />
  input value: {{ inputVal }}
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
