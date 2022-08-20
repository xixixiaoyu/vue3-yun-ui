<demo>
xxx
</demo>

<template>
  <checkboxGroup v-model="value" direction="x" :options="options" block />
  <br />
  <checkboxGroup v-model="value" direction="x" :options="options" block round />
  <br />
  选中的值：{{ value }}
</template>

<script setup lang="ts">
import { ref } from "vue";

let options = ref([
  { label: "宋朝", value: 1 },
  { label: "唐朝", value: 2 },
  { label: "明朝", value: 3 },
  { label: "清朝", value: 4 },
]);

let value = ref([]);
</script>
