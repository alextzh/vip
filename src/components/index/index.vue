<template>
  <div class="index">
    <div class="banner"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .index
    padding-bottom: 180px
    .banner
      height: 100vh
      width: 100%
      bg-image("banner", "jpg")
      background-size: cover
</style>
