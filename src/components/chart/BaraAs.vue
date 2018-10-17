<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
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
      <v-bar position="time*waiting" color="#1890ff" />
      <v-smooth-line position="time*people" color="#1890ff" :size="gemoSize" />
      <!-- 填充shape="circle" -->
      <v-point  position="time*people" color="#1890ff" :size="gemoSize" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { time: '2015', call: 4, waiting: 2, people: 2 },
    { time: '2016', call: 2, waiting: 6, people: 3 },
    { time: '2017', call: 13, waiting: 2, people: 5 },
    { time: '2018', call: 9, waiting: 9, people: 1 }
   
  ];

  const scale = [{
    dataKey: 'call',
    min: 0
  }, {
    dataKey: 'people',
    min: 0
  }, {
    dataKey: 'waiting',
    min: 0
  }];

  export default {
    data() {
      return {
        data,
        scale,
        height: 400,

        axisLabel: {
          textStyle: {
            fill: 'black'
          }
        },
        axisGrid: null,

        gemoSize: 3,

        legendCustom: true,
        legendAllowAllCanceled: true,
        legendItems: [
          {value: 'waiting', marker: {symbol: 'square', fill: '#3182bd', radius: 5} },
          {value: 'people', marker: {symbol: 'hyphen', stroke: '#fdae6b', radius: 5, lineWidth: 3} }
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
  };
</script>