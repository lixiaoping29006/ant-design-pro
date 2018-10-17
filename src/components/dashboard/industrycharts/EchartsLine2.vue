<template>
  <div id="echartsline2" style="width:90%;height:400px;}"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    mounted() {
      var myChart = this.$echartsAs.init(document.getElementById('echartsline2'));
      // 指定图表的配置项和数据
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      myChart.setOption({
        title: {
          text: [''],
          textStyle: {
            fontSize: '18',
            fontWeight: 'lighter'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['长城证券', '上市商劵均值', '招商证券', ],
          top: '90%'
        },
        xAxis: {
          type: 'category',
          data: ['2017年10月', '2017年10月', '2017年11月', '2018年1月', '2018年2月'],
          // axisLabel:{
          //     "textStyle": {
          //     "fontSize": 16
          //     }
          // }
        },
        grid: {
          left: '3%',
          right: '4%',
          // bottom: '3%',
          containLabel: true,
        },
        yAxis: [{
          type: 'value',
          min: 0,
          max: 1500,
          splitArea: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
            }
          },
          axisLine: {
            show: false
          },
          // 控制网格线是否显
          // 去除y轴上的刻度线
          axisTick: {
            show: false,
          },
        }],
        series: [{
            name: '长城证券',
            type: 'line',
            barWidth: 30, //柱图宽度
            data: [317.88, 188, 708, 197.11, 500],
            itemStyle: {
              color: "#1890ff",
            },
          },
          {
            name: '上市商劵均值',
            type: 'line',
            barWidth: 30,
            data: [1240.41, 500.64, 84.41, 200, 300],
            itemStyle: {
              color: '#2fc25b'
            },
          },
          {
            name: '招商证券',
            type: 'line',
            barWidth: 30,
            data: [67.13, 37.52, 32.53, 500, 700],
            itemStyle: {
              color: '#facc14'
            },
          },

        ]
      })
    }
  }

</script>

<style scoped>

</style>
