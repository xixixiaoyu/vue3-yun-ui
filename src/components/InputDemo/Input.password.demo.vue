<demo>password 密码框</demo>

<template>
  <Input type="password" v-model:value="inputVal" placeholder="please input password" />
</template>

<script>
import { ref } from "vue";
import { Input } from "../../lib/index";
export default {
  components: { Input },
  setup() {
    const inputVal = ref("this is clearable");
    return { inputVal };
  },
};
</script>
