<template>
  <div class="m-header">
    <nav class="navbar" ref="navBar">
      <a class="navbar-toggle" href="javascript:void(0);" @click="navbarToggle"><i class="material-icons">menu</i></a>
      <div class="icon"></div>
      <ul class="nav" ref="nav" @click="changeFlag">
         <router-link class="nav-item" tag="li" to="/index">
          <span class="nav-link">首页</span>
        </router-link>
        <router-link class="nav-item" tag="li" to="/joint-purchase">
          <span class="nav-link">合买</span>
        </router-link>
        <router-link class="nav-item" tag="li" to="/zhiyuan-operate">
          <span class="nav-link">至元操盘</span>
        </router-link>
        <router-link class="nav-item" tag="li" to="/about-us">
          <span class="nav-link">关于我们</span>
        </router-link>
        <router-link class="nav-item" tag="li" to="/message-board">
          <span class="nav-link">留言板</span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isToggle: false
      }
    },
    methods: {
      navbarToggle () {
        this.isToggle = !this.isToggle
        if (this.isToggle) {
          this.$refs.nav.style.display = 'block'
        } else {
          this.$refs.nav.style.display = 'none'
        }
      },
      changeFlag () {
        let width = this.$refs.navBar.clientWidth
        if (width <= 640) {
          this.$refs.nav.style.display = 'none'
          this.isToggle = false
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .m-header
    position: absolute
    top: 0
    left: 0
    height: 50px
    width: 100%
    background: $color-background
    font-size: 0
    z-index: 9
    .navbar
      position: relative
      padding: 0 15px
      max-width: 1280px
      margin: 0 auto
      height: 100%
      .navbar-toggle
        float: right
        padding: 13px
        display: none
      .icon
        float: left
        margin-top: 10px
        width: 120px
        height: 30px
        bg-image("logo","png")
        background-size: 120px 30px
      .nav
        float: right
        text-align: center
        line-height: 50px
        font-size: $font-size-medium-x
        .nav-item
          display: inline-block
          padding: 0 10px
          .nav-link
            display: block
            cursor: pointer
            color: $color-text
          &.router-link-active
            .nav-link
              color: $color-theme
      @media screen and (max-width: 640px)
        .navbar-toggle
          padding: 13px
          display: block
        .nav
          line-height: 50px
          font-size: $font-size-medium
          float: none
          text-align: left
          padding-top: 50px
          margin-left: -15px
          margin-right: -15px
          background: $color-background
          display: none
          .nav-item
            display: block
            padding: 0 15px
          .nav-item:nth-child(1)
            border-top: 1px solid rgba(0, 0, 0, 0.6)
            -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1)
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1)
</style>
