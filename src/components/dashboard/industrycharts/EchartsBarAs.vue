<template>
  <div>
    <div id="this.id" style="width:90%;height:400px;}"></div>
  </div>
</template>

<script>
  export default {
    name: 'barChart',
    props: {
      barData: {
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
        default: 'bar'
      }
    },
    data() {
      return {
        xName: [],
        barSeriesData: [],
        barText: []
      }
    },
    watch: {
      barData: {
        handler: function () {
          this.transformData()
          this.drawBarChart()
        },
        deep: true
      }
    },
    mounted() {
      var newData = this.transformData(this.barData);
      this.transformData()
      this.drawBarChart(newData);
    },

    methods: {
      transformData(barData) {
        let data = {}
        data.xName = []
        data.barSeriesData = []
        data.barText = []
        barData.forEach(item => {
          data.xName.push(item)
          data.barSeriesData.push(item)
          data.barText.push(item)
        })
        return data
      },
      drawBarChart() {
        var barChart = this.$echartsAs.init(document.getElementById('this.id'));
        // 指定图表的配置项和数据
        window.addEventListener('resize', function () {
          barChart.resize()
        })
        //myChart.setOption(option);
        barChart.setOption({
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
            data: data.xName,
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
            data: data.xName
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
              name: data.barText,
              type: 'bar',
              step: 'middle',
              barWidth: '15%',
              data: data.barSeriesData,
              //yAxisIndex:1,
              itemStyle: {
                color: '#1890ff'
              }
            },
            {
              name: data.barText,
              type: 'bar',
              step: 'start',
              barWidth: '15%',
              data: data.barSeriesData,
              yAxisIndex: 0,
              itemStyle: {
                color: '#2fc25b'
              }
            },
            {
              name: data.barText,
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
              name: data.barText,
              type: 'line',
              //step: 'middle',
              barWidth: '15%',
              data: data.barSeriesData,
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
  }

</script>

<style scoped>

</style>
