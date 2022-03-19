<script>
import { h } from "vue";
export default {
  name: "YunBread",
  props: {
    separator: {
      type: String,
      default: "/",
    },
  },
  setup(props, { slots }) {
    const items = slots.default();
    const dymanicItems = [];
    items.forEach((item, i) => {
      dymanicItems.push(item);
      if (i < items.length - 1) {
        dymanicItems.push([h("span", { class: "separator" }, [props.separator])]);
      }
    });
    return () => h("div", { class: "yun-bread" }, dymanicItems);
  },
};
</script>

<style lang="scss">
.yun-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: #999;
      }
    }
  }
  .separator {
    font-size: 16px;
    margin-left: 8px;
    margin-right: 8px;
    line-height: 26px;
    // color: rgb(158, 155, 155);
    color: rgb(124, 173, 157);
  }
}
</style>
