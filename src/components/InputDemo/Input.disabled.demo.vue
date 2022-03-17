<demo>禁止输入</demo>

<template>
  <Input value="this is disabled" disabled /><br />
  <Input value="this is readonly" readonly />
</template>

<script>
import { Input } from "../../lib/index";
export default {
  components: { Input },
  setup() {},
};
</script>
