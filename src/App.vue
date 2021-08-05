<template>
  <div id="app">
    <router-view></router-view>
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>

import MainTarBar from 'components/contents/maintarbar/MainTarBar.vue'
export default {
  name: 'app',
  components: {
    MainTarBar,
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
