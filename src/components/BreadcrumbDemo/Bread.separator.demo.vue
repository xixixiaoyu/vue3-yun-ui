<demo>
  <title>支持 separator</title>
</demo>

<template>
  <Breadcrumb separator=">">
    <BreadcrumbItem to="/doc/backtop">backtop</BreadcrumbItem>
    <BreadcrumbItem to="/doc/grid">grid</BreadcrumbItem>
    <BreadcrumbItem to="/doc/skeleton">skeleton</BreadcrumbItem>
    <BreadcrumbItem to="/doc/toast">toast</BreadcrumbItem>
  </Breadcrumb>
</template>

<script setup>
import { Breadcrumb, BreadcrumbItem } from "../../lib/index";
</script>

<style lang="scss">
.yun-bread-item a {
  color: #8ca38c;
}
</style>
