<demo>支持 clearable</demo>

<template>
  <Input v-model:value="inputVal" clearable @clear="handleClear" />
</template>

<script>
import { ref } from "vue";
import { Input } from "../../lib/index";
export default {
  components: { Input },
  setup() {
    const inputVal = ref("this is clearable");
    const handleClear = () => {
      console.log("input is clear");
    };
    return { inputVal, handleClear };
  },
};
</script>
