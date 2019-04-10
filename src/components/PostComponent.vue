<template>
  <div class="weather">
    <div class="weather-today">
      <div>
        <p><span>{{weather[0].tem}}</span>{{weather[0].wea}}</p>
        <p>{{weather[0].win[0]}}{{weather[0].win_speed}}/{{weather[0].tem2}}-{{weather[0].tem1}}空气质量:{{weather[0].air}}{{weather[0].air_level}}相对湿度:{{weather[0].humidity}}%</p>
        <p>{{weather[0].air_tips}}</p>
      </div>
      <ul class="weather-list">
        <li class="weather-item" v-for="item in weather[0].hours" :key="item.day">
          <p>{{item.day}}</p>
          <p>{{item.tem}}</p>
          <p>{{item.wea}}</p>
          <p>{{item.win}}</p>
          <p>{{item.win_speed}}</p>
        </li>
      </ul>
    </div>
    <ul class="weather-list">
    <li class="weather-item" v-for="item in weather" :key="item.date">
      <p>{{item.day}}</p>
      <p><img :src="getImgUrl(item.wea_img)" /></p>
      <p>{{item.wea}}</p>
      <p>{{item.tem2}}-{{item.tem1}}</p>
      <p>{{item.win[0]}}</p>
      <p>{{item.win_speed}}</p>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name:'PostComponent',
  data(){
    return{
      type:0
    }
  },
  computed:{
    weather(){
      return this.$store.state.weather
    }
  },
  mounted(){
    this.$store.dispatch('getWeather')
  },
  methods:{
    getImgUrl(icon) {
   return require("../assets/"+icon+".png");
}
    
  }
}
</script>

<style lang="scss" scoped>
  .weather-list{
    display: flex;
    background: -webkit-gradient(linear,0% 0,0% 100%,from(#0e7fdf),to(#69b8f0));
    color: #ffffff;
    .weather-item{
      list-style: none;
      padding: 5px;
    }
  }
</style>
