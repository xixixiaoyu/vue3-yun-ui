<template>
  <div class="yun-bread-item">
    <RouterLink v-if="to" :to="to"><slot /></RouterLink>
    <span v-else><slot /></span>
  </div>
</template>
<script>
export default {
  name: "YunBreadItem",
  props: {
    to: {
      type: [String, Object],
    },
  },
};
</script>
