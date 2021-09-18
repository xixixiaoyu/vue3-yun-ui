<template>
  <div :size="size">
    <button>
      <!-- v-bind="$attrs"绑定所有属性 -->
      <slot v-bind="rest" />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, { attrs }) {
    const { size, ...rest } = attrs;

    return { size, rest };
  },
};
</script>
