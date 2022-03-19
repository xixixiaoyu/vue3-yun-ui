<demo>
  <title>支持监听页码点击</title>
</demo>

<template>
  <Pagination @current-change="handleCurrentChange"></Pagination>
</template>

<script setup>
import { Pagination } from "../../lib/index";
const handleCurrentChange = (page) => {
  console.log("page change", page);
};
</script>
