<template>
  <div style="width:350px;height:300px;margin-left: -15%;">
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-axis />
      <!-- <v-legend dataKey="item" /> -->
      <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig" />
      <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  const sourceData = [{
      item: '经纪',
      count: 37.47
    },
    {
      item: '自营',
      count: 12.46
    },
    {
      item: '资管',
      count: 15.08
    },
    {
      item: '投行',
      count: 9.23
    },
    {
      item: '其他',
      count: 25.75
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
