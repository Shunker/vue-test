<template>
  <div id="echartLine" :style="{width: '500px', height: '400px'}"></div>
</template>

<script>
var echarts = require("echarts/lib/echarts");
// 引入折线图
require("echarts/lib/chart/line");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  mounted() {
    this.$store.dispatch('getWeather')
    this.drawLine();
  },
  computed:{
    weather(){
      return this.$store.state.weather
    }
  },
  methods: {
    
    drawLine() {
      var _this = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("echartLine"));
      // 绘制图表
      myChart.setOption({
        title: { text: 'Area chart' },
        tooltip:{},
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          name: '温度',
          min: 0,
          max: 25,
          axisLabel: {
                formatter: '{value} °C'
            },
        },
        series: [
          { 
            name: "平均温度",
            data: _this.weather,
            type: "line",           
            areaStyle: {
              color:'#409EFF'
            }
          }
        ]
      });
    }
  }
};
</script>
