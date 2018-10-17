<template>
  <div id="myechartsminibar" style="width:100%;height:150px;}"></div>
</template>

<script>
  export default {
    mounted() {
      var myChart = this.$echartsAs.init(document.getElementById('myechartsminibar'));
      // 指定图表的配置项和数据
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['2018-10-10', '2018-10-11', '2018-10-12', '2018-11-1', '2018-11-2', '2018-11-3', '2018-11-4',
            '2018-11-5', '2018-10-12', '2018-11-1', '2018-11-2', '2018-11-3', '2018-11-4', '2018-11-5'
          ],
          scale: true,
          show: false,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          //type : 'value',
          axisLine: {
            show: false
          },
          // 控制网格线是否显
          // 去除y轴上的刻度线
          axisTick: {
            show: false,
          },
          scale: true,
          show: false,
          splitLine: {
            show: false
          }
        }],
        series: [{
          name: 'y',
          type: 'bar',
          barWidth: '50%',
          data: [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5],
          color: ['#1890ff'],
        }]
      })
    }
  }

</script>

<style scoped>

</style>
