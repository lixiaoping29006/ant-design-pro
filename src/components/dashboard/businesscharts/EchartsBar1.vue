<template>
<div>
  <div id="myechartsbar1" style="width:100%;height:400px;}"></div>
</div>
  
</template>

<script>
  export default {
    mounted() {
      var myChart = this.$echartsAs.init(document.getElementById('myechartsbar1'));
      // 指定图表的配置项和数据
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      myChart.setOption({
        title: {
          text: '',
          textStyle: {
            fontSize: '16',
            fontWeight: 'lighter'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'center',
          data: ['长城证券', '上市券商均值', '招商证券', '长城证券该指标占行业比'],
          top: '90%'
        },
        grid: {
          left: '3%',
          right: '4%',
          //bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2015', '2016', '2017']
        },
        yAxis: [{
            boundaryGap: [0, '50%'],
            splitLine: {
              lineStyle: {
                type: 'dashed',
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false,
            },
            type: 'value',
            position: 'left',
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            boundaryGap: [0, '50%'],
            axisTick: {
              show: false,
              length: 8
            },
            splitLine: {
              show: false,
            },
            type: 'value',
            axisLabel: {
              formatter: '{value} %'
            },
            name: '',
            position: 'right',
            min: 0,
            max: 100,
          },
        ],
        series: [{
            name: '长城证券',
            type: 'bar',
            step: 'middle',
            barWidth: '15%',
            data: [120, 112, 25],
            //yAxisIndex:1,
            itemStyle: {
              color: '#1890ff'
            }
          },
          {
            name: '上市券商均值',
            type: 'bar',
            step: 'start',
            barWidth: '15%',
            data: [30, 28, 20],
            yAxisIndex: 0,
            itemStyle: {
              color: '#2fc25b'
            }
          },
          {
            name: '招商证券',
            type: 'bar',
            step: 'end',
            barWidth: '15%',
            data: [52, 42, 40],
            yAxisIndex: 1,
            itemStyle: {
              color: '#facc14'
            }
          },
          {
            name: '长城证券该指标占行业比',
            type: 'line',
            //step: 'middle',
            // barWidth : 30,
            data: [120, 132, 25],
            //yAxisIndex:1,
            position: '20px',
            itemStyle: {
              color: '#1890ff'
            }
          }
        ]
      })
    }
  }

</script>

<style scoped>

</style>
