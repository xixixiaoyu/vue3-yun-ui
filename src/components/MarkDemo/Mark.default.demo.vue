<demo>
文本标记
</demo>

<template>
  <p>
    春，是生死的负重；夏，是<Mark>情欲的勃发</Mark>；秋，是因果的了断；冬，是自我的修行。春夏秋冬又一春，就是整个生命的轮回。淫欲唤醒了占有的欲望，这会导致杀身之祸的——你喜欢的东西，别人也会喜欢。
  </p>
  <p>
    金钱既是天使，又是<Mark type="info">魔鬼</Mark>。 金钱正好够用，使你心满意足时，
    <Mark :bold="600" type="info">金钱是天使</Mark>；金钱让你感到是一堆麻烦时，便成了魔鬼。
    金钱是流动着的财富。有的人挣了钱对朋友不吝啬，有的人钱多了对自己
    <Mark to="https://cn.vuejs.org/" type="success">不慷慨</Mark>，这里面都有天使的点化。
  </p>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
p {
  font-size: 14px;
  line-height: 28px;
}
</style>
