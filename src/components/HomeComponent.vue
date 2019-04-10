<template>
  <div>HomeComponent
    <slot></slot>
    
    <p>{{this.$store.state.count}}</p>
    <button @click="$store.commit('increase')">改变数字</button>
  </div>
</template>

<script>
export default {
  name:'HomeComponent'
}
</script>

