<demo>Input update:value</demo>

<template>
  <Input
    v-model:value="inputVal"
    placeholder="please input username"
    @update:value="handleUpdate"
  />
  input value: {{ inputVal }}
</template>

<script>
import { ref } from "vue";
import { Input } from "../../lib/index";
export default {
  components: { Input },
  setup() {
    const inputVal = ref("");
    const handleUpdate = (newValue) => {
      console.log("input get new value", newValue);
    };
    return { inputVal, handleUpdate };
  },
};
</script>
