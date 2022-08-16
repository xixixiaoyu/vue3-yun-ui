<demo>
点
</demo>

<template>
  <div class="badge-container">
    <Badge round>
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge type="info" round>
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge type="warning" round>
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge type="error" round>
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
    </Badge>

    <Badge type="success" round>
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
