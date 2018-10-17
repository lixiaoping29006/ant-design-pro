<template>
  <div id="myechartsminiarae" style="width:100%;height:150px;}"></div>
</template>

<script>
  export default {
    mounted() {
      var myChart = this.$echartsAs.init(document.getElementById('myechartsminiarae'));
      // 指定图表的配置项和数据
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      myChart.setOption({
        title: {
          text: '',
          type: 'shadow',
          textStyle: {
            fontSize: '16',
            fontWeight: 'lighter'
          }
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          //data: ['其他产品', '混合基金', '股票基金', '债券基金'],
          //top: '90%',
        },

        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',

          scale: true,
          show: false,
          splitLine: {
            show: false
          },
          data: ['2018-10-10', '2018-10-11', '2018-10-12', '2018-11-1', '2018-11-2', '2018-11-3', '2018-11-4',
            '2018-11-5', '2018-10-12', '2018-11-1', '2018-11-2', '2018-11-3', '2018-11-4', '2018-11-5'
          ],
        }],
        yAxis: [{
          type: 'value',
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
          scale: true,
          show: false,
          splitLine: {
            show: false
          }
        }],
        series: [{
          name: '',
          type: 'line',
          //stack: '总量',
          symbol: 'none',
          smooth: 'true',
          areaStyle: {},
          data: [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5],
          //color: ['#1890ff'],
          itemStyle: {
            color: "rgba(24,144,255,0.5)",
          }
        }, ]
      })
    }
  }

</script>

<style scoped>

</style>
