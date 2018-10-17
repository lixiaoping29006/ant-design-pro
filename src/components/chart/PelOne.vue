<template>
  <div style="width:350px;height:300px;margin-left: -15%;">
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-axis />
      <!-- <v-legend dataKey="item" /> -->
      <v-pie position="percent" color="color" :vStyle="pieStyle" :label="labelConfig" left="13%"/>
      <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  const sourceData = [{
      item: '经纪',
      count: 12.67,
      color: "#1890ff"
    },
    {
      item: '自营',
      count: 0,
      color: "#2fc25b"
    },
    {
      item: '资管',
      count: 7.58,
      color: "#facc14"
    },
    {
      item: '投行',
      count: 16.95,
      color: "#223273"
    },
    {
      item: '其他',
      count: 62.8,
      color: "#8543e0"
    },
  ];
  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  });
  const data = dv.rows;

  export default {
    name: 'Pel',
    props: ['title'],
    data() {
      return {
        data,
        scale,
        height: 280,
        pieStyle: {
          stroke: "#fff",
          lineWidth: 1,
        },
        labelConfig: ['percent', {
          formatter: (val, item) => {
            return item.point.item + ': ' + val;
          }
        }],
      };
    }
  }

</script>

<style scoped>

</style>
