<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-tooltip />
      <v-axis :x="axisVal" :show="axisVal"/>
      <v-legend />
      <v-bar position="x*y" color="name" :adjust="adjust" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [{
      name: '长城证券',
      '2012': 317.88,
      '2013': 158.78,
      '2014': 117.11,
      '2015': 217.88,
      '2016': 188.78,
      '2017': 197.11,
      '2018': 197.11
    },
    {
      name: '上市券商均值',
      '2012': 217.88,
      '2013': 168.78,
      '2014': 137.11,
      '2015': 317.88,
      '2016': 79.64,
      '2017': 84.41,
      '2018': 120.41
    },
    {
      name: '招商证券',
      '2012': 117.88,
      '2013': 88.78,
      '2014': 197.11,
      '2015': 217.88,
      '2016': 37.52,
      '2017': 32.53,
      '2018': 67.13
    }
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['2012', '2013', '2014','2015', '2016', '2017','2018'],
    key: 'x',
    value: 'y',
  });
  const data = dv.rows;

  export default {
    name: 'Bar',
    props: ['title'],
    data() {
      return {
        data,
        height: 400,
        axisVal: false,
        adjust: [{
          type: 'dodge',
          marginRatio: 1 / 32,
        }],
        
      }
    }
  }

</script>

<style scoped>

</style>
