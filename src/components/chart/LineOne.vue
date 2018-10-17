<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-line position="x*y" color="name" />
      <v-point position="x*y" color="name" :size="4" :v-style="style" :shape="'circle'" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [{
      name: '长城证券',
      '2017年10月': 417.88,
      '2017年12月': 188.78,
      '2018年1月': 397.11,
      '2018年5月': 297.11,
      '2018年7月': 397.11,
    },
    {
      name: '上市劵商均值',
      '2017年10月': 317.88,
      '2017年12月': 206.78,
      '2018年1月': 597.11,
      '2018年5月': 397.11,
      '2018年7月': 197.11,
    },
    {
      name: '招商证券',
     '2017年10月': 117.88,
      '2017年12月': 128.78,
      '2018年1月': 407.11,
      '2018年5月': 117.11,
      '2018年7月': 307.11,
    }
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['2017年10月', '2017年12月', '2018年1月','2018年5月','2018年7月'],
    key: 'x',
    value: 'y',
  });
  const data = dv.rows;
  const scale = [{
    dataKey: 'name',
    min: 0,
    max: 1,
  }];

  export default {
    name: '',
    props: ['title'],
    data() {
      return {
        data,
        height: 400,
        scale,
        style: {
          stroke: '#fff',
          lineWidth: 1
        },
      }
    }
  }

</script>

<style scoped>

</style>
