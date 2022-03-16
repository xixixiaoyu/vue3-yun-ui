<demo>Shadow 效果</demo>

<template>
  <div class="wrap">
    <template v-for="type in types" :key="type">
      <Card :title="type" :type="type">{{ type }} card</Card>
    </template>
  </div>
</template>

<script>
import { Card } from "../../lib/Card/index";
export default {
  components: {
    Card,
  },
  setup() {
    const types = [
      "secondary",
      "alert",
      "success",
      "purple",
      "warning",
      "violet",
      "cyan",
      "error",
      "dark",
      "lite",
    ];

    return {
      types,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  .coast-card {
    width: 40%;
    margin-left: 5%;
    margin-top: 16px;
  }
}
</style>
