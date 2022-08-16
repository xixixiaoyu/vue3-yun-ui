<demo>
单独使用
</demo>

<template>
  <div class="badge-container">
    <Badge value="7"> </Badge>

    <Badge type="info" value="15"> </Badge>

    <Badge type="warning" value="9+"> </Badge>

    <Badge type="error" value="68"> </Badge>

    <Badge type="success" value="99+"> </Badge>

    <Badge value="7" round> </Badge>

    <Badge type="info" value="15" round> </Badge>

    <Badge type="warning" value="9+" round> </Badge>

    <Badge type="error" value="68" round> </Badge>

    <Badge type="success" value="99+" round> </Badge>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.badge-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
