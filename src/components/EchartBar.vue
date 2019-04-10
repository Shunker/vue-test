<template>
  <div id="echartBar" :style="{width: '400px', height: '400px'}"></div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
  mounted(){
    this.drawLine()
  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('echartBar'))
        // 绘制图表
        myChart.setOption({
            title: { text: 'Bar chart' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
                itemStyle: {
                  color: '#409EFF'
                },
                emphasis: {
                  itemStyle: {
                      // 高亮时点的颜色。
                      color: 'blue'
                  },
                  label: {
                      show: true,
                      // 高亮时标签的文字。
                      formatter: 'This is a emphasis label.'
                  }
                }
            }]
        });
    }
  }
}
</script>
