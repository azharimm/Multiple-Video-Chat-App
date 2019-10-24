<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      getRoom: 'getRoom'
    })
  }
  
}
</script>

<style lang="scss">
@import './assets/styles/app';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
