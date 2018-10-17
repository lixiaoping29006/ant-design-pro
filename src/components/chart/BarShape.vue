<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data">
       <v-coord type="rect" direction="LB" />
      <v-tooltip />
      <v-legend />
      <v-axis dataKey="State" :label="label" />
      <v-stack-bar position="State*y" color="x" />
      <!--色值： #445188,#9860e5,#37cbcb,#5355d0 -->
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
    const sourceData = [
    { 'State': '招商证券', '长城证券': 30, '上市商劵均值': 40, '招商证券': 30 },
    { 'State': '上市商劵均值', '长城证券': 15, '上市商劵均值': 30, '招商证券': 55 },
    { 'State': '长城证券', '长城证券': 30, '上市商劵均值': 55, '招商证券': 15 },
    // { 'State': 'ND', '2015': 35, '2016': 25, '2017': 40 },
    // { 'State': 'AK', '2015': 40, '2016': 10, '2017': 50 }
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['长城证券', '上市商劵均值', '招商证券'],
    key: 'x',
    value: 'y',
    retains: ['State'],
  });
  const data = dv.rows;
  const label = { offset: 12 };

  export default {
    name: '',
    props: ['title'],
    data() {
      return {
        data,
        height: 300,
        //scale,
        label: label,
        // style: {
        //   stroke: '#fff',
        //   lineWidth: 1
        // },
      }
    }
  }

</script>

<style scoped>
p{
    margin-left: 33px;
}
</style>
