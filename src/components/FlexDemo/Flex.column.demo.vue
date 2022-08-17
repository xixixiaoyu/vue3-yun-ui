<demo>
column
</demo>

<template>
  <div class="flex-container">
    <div class="demo">
      <Flex direction="column" x="start" y="start" gap="20px">
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
      </Flex>
      <Flex direction="column" x="center" y="start" gap="20px">
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
      </Flex>
      <Flex direction="column" x="end" y="start" gap="20px">
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
      </Flex>
    </div>
    <div class="demo">
      <Flex direction="column" x="start" y="center" gap="20px">
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
      </Flex>
      <Flex direction="column" x="center" y="center" gap="20px">
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
      </Flex>
      <Flex direction="column" x="end" y="center" gap="20px">
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
      </Flex>
    </div>
    <div class="demo">
      <Flex direction="column" x="start" y="end" gap="20px">
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
      </Flex>
      <Flex direction="column" x="center" y="end" gap="20px">
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
      </Flex>
      <Flex direction="column" x="end" y="end" gap="20px">
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
        <div class="box"><div></div></div>
      </Flex>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.yun-flex {
  width: 200px;
  height: 200px;
  padding: 5px;
  margin: 10px;
  margin-bottom: 20px;
  border: 1px var(--yun-bgcolor-2) solid;
  border-radius: var(--yun-form-border-radius);
  background-color: var(--yun-bgcolor-1);
  .box {
    div {
      display: inline-block;
      padding: 10px;
      font-size: 14px;
      border-radius: var(--yun-form-border-radius);
      background-color: var(--yun-primary-color);
    }
  }
}
</style>
