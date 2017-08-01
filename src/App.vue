<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'

  export default {
    components: {
      MHeader,
      MFooter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    min-height: 100%
    height: 100%
    display: flex
    flex-direction: column
</style>
