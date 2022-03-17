<template>
  <svg aria-hidden="true" class="yun-icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import "./Icon.scss";
import { computed } from "vue";
export default {
  name: "YunIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: false,
      default: "icon",
    },
  },
  setup(props) {
    const iconName = computed(() => {
      return "#" + props.prefix + "-" + props.name;
    });
    return {
      iconName,
    };
  },
};
</script>
