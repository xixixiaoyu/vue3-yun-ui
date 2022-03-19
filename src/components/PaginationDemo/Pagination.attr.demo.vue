<demo>
  <title>支持更多属性</title>
  <desc>可设置 showCount 为展示按钮数量，total 为总条数，pageSize 为每页条数，currentPage 为当前页码</desc>
</demo>

<template>
  <Pagination :showCount="8" :total="100" :pageSize="10" :currentPage="5"></Pagination>
</template>

<script setup>
import { Pagination } from "../../lib/index";
</script>
