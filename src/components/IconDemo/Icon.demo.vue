<demo>
图标
</demo>

<script setup lang="ts">
import {
  Info24Regular,
  Warning24Regular,
  CheckmarkCircle24Regular,
  ErrorCircle24Regular,
  Alert24Regular,
  Earth20Filled,
  Heart20Regular,
} from "@vicons/fluent";
import { Icon } from "@vicons/utils";
</script>

<template>
  <icon size="24"> <Info24Regular /></icon>
  <icon size="28"> <Warning24Regular /></icon>
  <icon size="32"> <CheckmarkCircle24Regular /></icon>
  <icon size="36"> <ErrorCircle24Regular /></icon>
  <icon size="40" tag="div"> <Alert24Regular /></icon>
  <icon size="46" color="#b00"> <Heart20Regular /></icon>
  <icon size="54"> <Earth20Filled /></icon>
</template>
