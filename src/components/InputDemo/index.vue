<template>
  <h1>Input 示例</h1>
  <div>
    <Demo :component="Input1" />
    <Demo :component="Input2" />
    <Demo :component="Input3" />
    <Demo :component="Input4" />
    <Demo :component="Input5" />
    <Demo
      :component="Input6"
      description="共支持 mini，small，medium，large 四种 size，默认的 size 是 medium"
    />
    <Demo
      :component="Input7"
      description="共支持 normal，secondary，success，warning，error 五种 status，默认的 status 是 normal"
    />
    <Demo :component="Input8" />
    <Demo :component="Input9" />
    <Demo :component="Input10" description="可通过事件 update:value 获取最新值" />
    <Demo :component="Input11" description="事件包含: input, change, focus, blur, keydown" />
  </div>
</template>

<script setup>
import Demo from "../Demo.vue";
import Input1 from "./Input.default.demo.vue";
import Input2 from "./Input.disabled.demo.vue";
import Input3 from "./Input.clearable.demo.vue";
import Input4 from "./Input.password.demo.vue";
import Input5 from "./input-max-demo.vue";
import Input6 from "./Input.size.demo.vue";
import Input7 from "./Input.status.demo.vue";
import Input8 from "./Input.width.demo.vue";
import Input9 from "./Input.label.demo.vue";
import Input10 from "./Input.model.demo.vue";
import Input11 from "./Input.events.demo.vue";
</script>
