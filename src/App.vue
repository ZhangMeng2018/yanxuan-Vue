<template>
  <div id="app">
    <div class="contentContiner">
      <router-view/>
    </div>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    .contentContiner
      width 100%
      height 100%
      box-sizing border-box
      padding-bottom 1.30667rem
</style>
