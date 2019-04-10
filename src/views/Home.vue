<template>
  <div class="home">

    <button v-for="(item,index) in tabTitle" v-on:click="tabs(item)" :key="index">{{item}}</button>

    <component v-bind:is="currentTabComponent">123</component>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '../components/HomeComponent';
import PostComponent from '../components/PostComponent';
import ArchiveComponent from '../components/ArchiveComponent';
export default {
  name: "home",
  components: {
    HomeComponent,PostComponent,ArchiveComponent
  },
  data() {
    return {
      tabTitle:['Home','Post','Archive'],
      currentTabComponent: "HomeComponent"
    };
  },
  methods: {
    tabs(value) {
      console.log(value);
      
      this.currentTabComponent = value + "Component";
    }
  }
};
</script>
