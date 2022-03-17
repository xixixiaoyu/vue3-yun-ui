<demo>支持 status</demo>

<template>
  <Input v-model:value="value1" placeholder="normal" status="normal" /> <br />
  <Input v-model:value="value2" placeholder="secondary" status="secondary" /><br />
  <Input v-model:value="value3" placeholder="success" status="success" /><br />
  <Input v-model:value="value4" placeholder="warning" status="warning" /><br />
  <Input v-model:value="value5" placeholder="error" status="error" />
</template>

<script>
import { ref } from "vue";
import { Input } from "../../lib/index";
export default {
  components: { Input },
  setup() {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    const value4 = ref("");
    const value5 = ref("");
    return { value1, value2, value3, value4, value5 };
  },
};
</script>
