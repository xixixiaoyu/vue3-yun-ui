<demo>
点击事件触发
</demo>

<template>
  <Flex gap="20px">
    <Button
      v-tooltip="{
        content:
          '哈士奇一般指西伯利亚雪橇犬。哈士奇一般指西伯利亚雪橇犬。哈士奇一般指西伯利亚雪橇犬。',
        placement: 'left',
        trigger: 'click',
      }"
      >左方</Button
    >
    <Button
      v-tooltip="{
        content:
          '哈士奇一般指西伯利亚雪橇犬。哈士奇一般指西伯利亚雪橇犬。哈士奇一般指西伯利亚雪橇犬。',
        placement: 'top',
        trigger: 'click',
      }"
      >上方</Button
    >

    <Button
      v-tooltip="{
        content:
          '哈士奇一般指西伯利亚雪橇犬。哈士奇一般指西伯利亚雪橇犬。哈士奇一般指西伯利亚雪橇犬。',
        placement: 'bottom',
        trigger: 'click',
      }"
      >下方</Button
    >
    <Button
      v-tooltip="{
        content:
          '哈士奇一般指西伯利亚雪橇犬。哈士奇一般指西伯利亚雪橇犬。哈士奇一般指西伯利亚雪橇犬。',
        placement: 'right',
        trigger: 'click',
      }"
      >右方</Button
    >
  </Flex>
</template>
