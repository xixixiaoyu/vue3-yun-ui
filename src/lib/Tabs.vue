<template>
  <div>Tabs 组件</div>
  <!-- <component :is="defaults[0]"></component>
  <component :is="defaults[1]"></component> -->
  <div v-for="(t, index) in title" :key="index">{{ t }}</div>
  <component v-for="(c, index) in defaults" :is="c" :key="index"></component>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });

    const title = defaults.map((tag) => {
      return tag.props.title;
    });
    return {
      defaults,
      title,
    };
  },
};
</script>
