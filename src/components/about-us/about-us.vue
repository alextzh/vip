<template>
  <div class="about-us" ref="aboutUs">
    <div class="banner">
      <img src="~common/image/zy.jpg" alt="">
    </div>
    <div class="container">
      <ul class="content-box clearfix">
        <li class="item left">
          <h1 class="title">深圳前海石时代信息技术有限公司</h1>
          <img class="logo" src="./ssd.png" alt="">
        </li>
        <li class="item right">
          <p class="desc">公司在2017年6月成立于深圳市前海开发区，运营公司在西安市，是一家提供专业化信息管理和风控服务的公司。石时代凭借创新视觉和市场敏锐性以及强大的前瞻性风控策略，为用户提供良好的体验和服务。</p>
          <p class="address"><span>注册地址：</span>深圳市前海深港合作区前湾一路1号A栋201室</p>
          <p class="address"><span>西安分公司：</span>西安市高新区沣惠南路16号泰华金贸国际第15幢1单元13层11303号</p>
          <div class="btn-group">
            <a class="btn" href="javascript:void(0);" @click="showImgF">总公司营业执照</a>
            <a class="btn" href="javascript:void(0);" @click="showImgS">分公司营业执照</a>
          </div>
        </li>
      </ul>
    </div>
    <modal ref="theModal" :needHeader="false" :needFooter="false">
      <div slot="body">
        <img :src="getImg" width="100%">
      </div>
    </modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import Modal from 'components/modal/modal'
  export default {
    data () {
      return {
        flag: 0
      }
    },
    computed: {
      getImg () {
        return this.flag === 0 ? 'static/sz.jpg' : 'static/xa.jpg'
      }
    },
    methods: {
      showImgF () {
        this.$refs.theModal.open()
        this.flag = 0
      },
      showImgS () {
        this.$refs.theModal.open()
        this.flag = 1
      }
    },
    components: {
      Modal
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .about-us
    padding-bottom: 180px
    .banner
      width: 100%
      img
        max-width: 100%
        width: 100%
        display: block
    .container
      position: relative
      padding: 50px 15px
      max-width: 1280px
      width: 100%
      margin: 0 auto
      box-sizing: border-box
      .content-box
        background: $color-text
        border: 1px solid rgba(0,0,0,0,.3)
        border-radius: 4px
        padding: 70px 0
        .item
          float: left
          box-sizing: border-box
          &.left
            width: 40%
            text-align: center
            padding: 30px
            box-sizing: border-box
            .title
              font-size: 20px
              padding-bottom: 60px
            .logo
              display: block
              width: 50%
              margin: 0 auto
          &.right
            width: 60%
            padding: 0 30px
            box-sizing: border-box
            line-height: 1.5
            .desc
              font-size: 20px
              text-indent: 2em
              padding-bottom: 30px
            .address
              font-size: 16px
              padding: 10px 0 10px 100px
              position: relative
              span
                position: absolute
                left: 0
                width: 100px
                text-align: right
            .btn-group
              padding-top: 30px
              .btn
                display: inline-block
                width: 30%
                text-align: center
                height: 40px
                line-height: 40px
                background: #ddd
                color: #333
                border-radius: 4px
                margin-right: 10px
                margin-bottom: 20px
        @media screen and (max-width: 640px)
          .item
            &.left
              width: 100%
            &.right
              width: 100%
              .btn-group
                text-align: center
                .btn
                  width: 60%
</style>
