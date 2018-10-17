<template>
  <div id="this.id" style="width:90%;height:400px;}"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'lineChart',
    props: {
      lineData: {
        type: Array
      },
      barText: {
        type: Array
      },
      // tollFormatter: {
      //   type: String
      // },
      // axisFormatter: {
      //   type: String
      // },
      id: {
        type: String,
        default: 'line'
      }
    },
    data() {
      return {
        xName: [],
        lineSeriesData: [],
        lineText: []
      }
    },
    watch: {
      barData: {
        handler: function () {
          this.transformData()
          this.drawLine()
        },
        deep: true
      }
    },
    mounted() {
      var newData = this.transformData(this.lineData);
      this.transformData(newData)
      this.drawLine()
    },
    methods: {
      transformData(lineData) {
        let data = {}
        data.xName = []
        data.lineSeriesData = []
        data.barText = []
        lineData.forEach(item => {
          data.xName.push(item)
          data.lineSeriesData.push(item)
          data.lineText.push(item)
        })
        return data
      },
      drawLine() {
        var lineChart = this.$echartsAs.init(document.getElementById('this.id'));
        // 指定图表的配置项和数据
        window.addEventListener('resize', function () {
          lineChart.resize()
        })
        lineChart.setOption({
          title: {
            text: '',
            textStyle: {
              fontSize: '18',
              fontWeight: 'lighter'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'line' // 默认为直线，可选为：'line' | 'shadow'
              // formatter: this.tollFormatter
            }
          },
          legend: {
            data: data.lineText,
            top: '90%'
          },
          xAxis: {
            type: 'category',
            data: data.xName,
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
              show: false // 控制网格线是否显
            },
            axisTick: {
              show: false, // 去除y轴上的刻度线
            },
          }],
          series: [{
              name: data.lineText,
              type: 'line',
              barWidth: 30, //柱图宽度
              data: data.lineSeriesData,
              itemStyle: {
                color: "#1890ff",
              },
            },
            {
              name: data.lineText,
              type: 'line',
              barWidth: 30,
              data: data.lineSeriesData,
              itemStyle: {
                color: '#2fc25b'
              },
            },
            {
              name: data.lineText,
              type: 'line',
              barWidth: 30,
              data: data.lineSeriesData,
              itemStyle: {
                color: '#facc14'
              },
            },

          ]
        })
      }
    },

  }

</script>

<style scoped>

</style>
