<demo>
常见页面布局
</demo>

<template>
  <co-layout>
    <co-header>Header</co-header>
    <co-content>Content</co-content>
  </co-layout>

  <co-layout>
    <co-header>Header</co-header>
    <co-content>Content</co-content>
    <co-footer>Footer</co-footer>
  </co-layout>

  <co-layout>
    <co-aside width="200px">Aside</co-aside>
    <co-content>Content</co-content>
  </co-layout>

  <co-layout>
    <co-header>Header</co-header>
    <co-layout>
      <co-aside width="200px">Aside</co-aside>
      <co-content>Content</co-content>
    </co-layout>
  </co-layout>

  <co-layout>
    <co-header>Header</co-header>
    <co-layout>
      <co-aside width="200px">Aside</co-aside>
      <co-layout>
        <co-content>Content</co-content>
        <co-footer>Footer</co-footer>
      </co-layout>
    </co-layout>
  </co-layout>

  <co-layout>
    <co-aside width="200px">Aside</co-aside>
    <co-layout>
      <co-header>Header</co-header>
      <co-content>Content</co-content>
    </co-layout>
  </co-layout>

  <co-layout>
    <co-aside width="100px">Aside</co-aside>
    <co-layout>
      <co-header height="70px">Header</co-header>
      <co-content>Content</co-content>
      <co-footer height="50px">Footer</co-footer>
    </co-layout>
  </co-layout>
</template>

<script setup>
import { CoAside, CoFooter, CoHeader, CoContent, CoLayout } from "../../lib/Layout/index";
</script>

<style lang="scss" scoped>
.coast-layout {
  margin-bottom: 40px;
  color: #fff;
  * {
    text-align: center;
  }
  &:last-child {
    margin-bottom: 0;
  }
  .coast-header,
  .coast-footer {
    background: #7dbcea;
    line-height: 60px;
  }
  .coast-content {
    background: #108ee9;
    line-height: 120px;
  }
  .coast-aside {
    background: #3ba0e9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
