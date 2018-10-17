<template>
  <div style="width:800px">
    <v-chart :forceFit="false"  width="734" :height="height" :data="data">
      <v-tooltip />
      <v-legend
        :custom="legendCustom"
        :allow-all-canceled="legendAllowAllCanceled"
        :items="legendItems"
        :on-click="legendOnClick"
      />
      <v-axis
        data-key="people"
        :grid="axisGrid"
        :label="axisLabel"
      />
      <v-bar position="x*y" color="name" :adjust="adjust" />
      <v-path position="x*长城证券改指标占行比" :size="gemoSize" />
      <v-point  position="x*长城证券改指标占行比" :size="gemoSize" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [{
      name: '长城证券',
      '2015': 24.4,
      '2016': 15.08,
      '2017': 12.67,'长城证券改指标占行比': 24
    },
    {
      name: '上市券商均值',
      '2015': 10,
      '2016': 10,
      '2017': 10, 
    },
    {
      name: '招商证券',
      '2015': 4.85,
      '2016': 8.69,
      '2017': 7.58,
    }
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['2015', '2016', '2017'],
    key: 'x',
    value: 'y',
  });
  const data = dv.rows;
  const scale = [{
    dataKey: '长城证券改指标占行比',
    min: 0,
    formatter: '.2%',
  }];

  export default {
    name: '',
    props: ['title'],
    data() {
      return {
        data,
        height: 400,
        scale,
        adjust: [{
          type: 'dodge',
          marginRatio: 1 / 32,
        }],
        axisGrid: null,
        axisLabel: {
          textStyle: {
            fill: 'black'
          }
        },
        gemoSize: 2,

        legendCustom: true,
        legendAllowAllCanceled: true,
        legendItems: [
          {value: '长城证券', marker: {symbol: 'square', fill: '#1890ff', radius: 5} },
          {value: '上市商劵均值', marker: {symbol: 'square', fill: '#2fc25b', radius: 5} },
          {value: '招商证券', marker: {symbol: 'square', fill: '#facc14', radius: 5} },
          {value: '长城证券改指标占行比', marker: {symbol: 'hyphen', stroke: '#1890ff', radius: 5, lineWidth: 3} }
        ],
        legendOnClick: (ev, chart) => {
          const item = ev.item;
          const value = item.value;
          const checked = ev.checked;
          const geoms = chart.getAllGeoms();
          for (let i = 0; i < geoms.length; i++) {
            const geom = geoms[i];
            if (geom.getYScale().field === value) {
              if (checked) {
                geom.show();
              } else {
                geom.hide();
              }
            }
          }
        },
      };
    }
  }

</script>

<style scoped>

</style>
