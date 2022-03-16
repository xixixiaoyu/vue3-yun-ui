<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo" title="基本用法" description="开关按钮最简单的用法。" />
    <Demo :component="Switch2Demo" title="不可用" description="Switch 失效状态。" />
  </div>

  <Attr :columns="columns" :data="data" />
</template>

<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "../Demo.vue";
import { columns } from "../../lib/data";
import Attr from "../Attr.vue";
export default {
  components: {
    Demo,
    Attr,
  },
  setup() {
    const data = [
      {
        params: "value",
        desc: "是否选中",
        type: "boolean",
        select: "false / true",
        default: "false",
      },
      {
        params: "disabled ",
        desc: "是否禁用",
        type: "boolean",
        select: "false / true",
        default: "false",
      },
    ];
    return {
      Switch1Demo,
      Switch2Demo,
      columns,
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
