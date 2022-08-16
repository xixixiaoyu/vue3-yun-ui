<demo>
基础用法
</demo>

<template>
  <div class="badge-container">
    <Badge value="7">
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge value="15" type="info">
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge value="9+" type="warning">
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge value="68" type="error">
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge value="99+" type="success">
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge value="9" round>
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge value="15" type="info" round>
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge value="36" type="warning" round>
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge value="24" type="error" round>
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge value="999+" type="success" round>
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>
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
