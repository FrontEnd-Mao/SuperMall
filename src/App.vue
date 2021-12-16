<template>
  <div id="app">
    <router-view exclude="Detail"></router-view>
    <main-tar-bar v-if="this.$route.meta.showTab"></main-tar-bar>
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
