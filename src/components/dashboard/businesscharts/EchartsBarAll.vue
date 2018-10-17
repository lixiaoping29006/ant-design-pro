<template>
  <div id="this.id" style="width:90%;height:400px;}"></div>
</template>

<script>
  export default {
    name: 'shapeChart',
    props: {
      shapeData: {
        type: Array
      },
      shapeText: {
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
        default: 'shape'
      }
    },
    data() {
      return {
        xName: [],
        shapeSeriesData: [],
        shapeText: []
      }
    },
    watch: {
      barData: {
        handler: function () {
          this.transformData()
          this.drawshape()
        },
        deep: true
      }
    },
    mounted() {
      var newData = this.transformData(this.shapeData)
      this.drawshape();
      this.transformData()
    },
    methods:{
      transformData(shapeData) {
         let data = {}
        data.xName = []
        data.shapeSeriesData = []
        data.shapeText = []
        shapeData.forEach(item => {
          data.xName.push(item)
          data.shapeSeriesData.push(item)
          data.shapeText.push(item)
        })
      },
      drawshape() {
      var shapeChart = this.$echartsAs.init(document.getElementById('this.id'));
      // 指定图表的配置项和数据
      window.addEventListener('resize', function () {
        shapeChart.resize()
      })
      shapeChart.setOption({
        title: {
          text: [''],
          textStyle: {
            fontSize: '16',
            fontWeight: 'lighter'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          "textStyle": {
            "fontSize": 16
          }
        },
        legend: {
          data:data.shapeText,
          top: '90%'
        },
        yAxis: {
          type: 'category',
          data: data.xName,
          axisLabel: {
            "textStyle": {
              "fontSize": 16
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          //bottom: '3%',
          containLabel: true,
        },
        xAxis: [{
          type: 'value',
          min: 0,
          max: 100,
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
            name: data.shapeText,
            type: 'bar',
            barWidth: 30,
            data: [30, 10, 20],
            itemStyle: {
              color: "#445188",
            },
            stack: 'a'
          },
          {
            name: data.shapeText,
            type: 'bar',
            barWidth: 30, //柱图宽度
            data: [50, 50, 40],
            itemStyle: {
              color: '#9860e5'
            },
            stack: 'a'
          },
          {
            name: data.shapeText,
            type: 'bar',
            barWidth: 30,
            data: [10, 25, 20, ],
            itemStyle: {
              color: '#37cbcb'
            },
            stack: 'a'
          },
           {
            name: data.shapeText,
            type: 'bar',
            barWidth: 30,
            data: [10, 15, 20, ],
            itemStyle: {
              color: '#5355d0'
            },
            stack: 'a'
          }
        ]
      })
    }
    },
    
  }

</script>

<style scoped>

</style>
