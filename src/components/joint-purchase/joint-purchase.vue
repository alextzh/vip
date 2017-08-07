<template>
  <div class="joint-purchase">
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
  .joint-purchase
    padding-bottom: 180px
    .banner
      width: 100%
      height: 100vh
      bg-image("ydhem", "jpg")
      background-size: cover
</style>
