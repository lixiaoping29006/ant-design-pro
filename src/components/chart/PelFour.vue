<template>
  <div>
    <div id="charts" style="width:300px;height:200px;}"></div>
  </div>
</template>

<script>

var echarts = require('echarts');
 export default {
    mounted() {
        /*ECharts图表*/
        var myChart = echarts.init(document.getElementById('charts'));
        myChart.setOption({
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    itemStyle: {
                        normal: {
                            // 阴影的大小
                            shadowBlur: 200,
                            // 阴影水平方向上的偏移
                            shadowOffsetX: 0,
                            // 阴影垂直方向上的偏移
                            shadowOffsetY: 0,
                            // 阴影颜色
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    data:[
                        {value:400, name:'搜索引擎'},
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:274, name:'联盟广告'},
                        {value:235, name:'视频广告'}
                    ]
                }
            ]
        })
    },
}
</script>

<style scoped>

</style>