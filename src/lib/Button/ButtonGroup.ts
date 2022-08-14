import { defineComponent, h } from "vue";
import "./style/ButtonGroup.scss";
const CoastButtonGroup = defineComponent({
  name: "ButtonGroup",
  setup(props, { slots }) {
    return () => h("div", { class: "coast-button-group" }, slots.default?.());
  },
});
export default CoastButtonGroup;
