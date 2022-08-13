<template>
  <div class="yun-attr">
    <h2>Props</h2>
    <table class="attr-table">
      <thead>
        <tr>
          <th class="yun-attr-title" v-for="item in columns" :key="item.title">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item">
          <td class="yun-attr-title" v-for="value in item" :key="value">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "attr",
  props: {
    columns: {
      type: Object,
    },
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.yun-attr {
  position: relative;
  width: 100%;
  overflow-x: auto;

  h2 {
    color: var(--yun-text-color-3);
    font-size: 20px;
    margin: 55px 0 18px;
  }
  .attr-table {
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }

  .yun-attr-title {
    max-width: 250px;
    padding: 15px;
    text-align: left;
    white-space: nowrap;
    border-radius: 6px;
  }
  th {
    background-color: #fafafa;
    color: var(--yun-text-color-3);
  }
  td {
    color: #606266;
    color: var(--yun-text-color-5);
  }
}
</style>
