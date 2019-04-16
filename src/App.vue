<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"/>

    </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
   import Msite from './pages/MSite/MSite.vue'

    export default {
      components:{
        FooterGuide,
         Msite
      }
    }
</script>

<!--<style lang="stylus" rel="stylesheet/stylus">-->
  <!--.app-->
    <!--width 100%-->
    <!--height 100%-->
    <!--background #f5f5f5-->

<!--</style>-->
