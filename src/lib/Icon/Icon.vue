<template>
  <svg aria-hidden="true" class="coast-icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import "./Icon.scss";
import { computed } from "vue";
export default {
  name: "CoastIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: false,
      default: "coast-icon-",
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
