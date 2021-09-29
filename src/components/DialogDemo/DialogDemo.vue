<template>
  <div>Dialog 示例</div>
  <Demo :component="Dialog1Demo" title="基本用法" description="弹出一个对话框"/>
  <Demo :component="Dialog2Demo" title="函数式调用" description="隐藏dom结构，只暴露出调用的api"/>
  <attr :columns="columns" :data="data"></attr>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
import { columns } from "../../lib/data";
import Attr from "../Attr.vue";
export default {
  components: {
    Demo,Attr
  },
  setup() {
     const data = [
      {
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        select: 'true / false',
        default: 'normal',
      },
      {
        params: 'ok',
        desc: '确认触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
      {
        params: 'cancel',
        desc: '取消触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
    ];
    return {
      Dialog1Demo,
      Dialog2Demo,
      columns,
      data
    };
  },
};
</script>
