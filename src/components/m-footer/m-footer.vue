<template>
  <div class="m-footer">
    <div class="foot-link">
      <span>友情链接:</span>
      <a href="http://www.yazhoujuejin.com" target="_blank">亚洲掘金</a>
    </div>
    <div class="foot-contact clearfix">
      <div class="item">
        <div class="icon">
          <i class="material-icons">phone</i>
        </div>
        <div class="text">
          <h2 class="name">400-004-2636</h2>
          <p class="desc">通过电话给我们反馈意见</p>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="material-icons">mail_outline</i>
        </div>
        <div class="text">
          <h2 class="name">iysdd@sina.com</h2>
          <p class="desc">通过邮件给我们反馈意见</p>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="material-icons">chat</i>
        </div>
        <div class="text">
          <h2 class="name">客服微信:yunshididai01</h2>
          <p class="desc">通过微信给我们反馈意见</p>
        </div>
        <div class="weixin-box">
          <p>扫一扫添加客服微信</p>
          <img src="./kfwx.jpg" width="150" height="150" alt="">
          <p>微信号: yunshididai01</p>
        </div>
      </div>
      <div class="item">
        友情提示：股市有风险,投资需谨慎
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .m-footer
    position: relative
    width: 100%
    box-sizing: border-box
    background: $color-background
    .foot-link
      height: 50px
      line-height: 50px
      padding: 0 20px
      background: $color-background-d
      color: $color-text-d
      font-size: $font-size-medium-x
      span
        font-size: $font-size-small
      a:hover
        text-decoration: underline
    .foot-contact
      position: relative
      width: 100%
      padding: 30px 15px
      box-sizing: border-box
      .item
        position: relative
        float: left
        width: 25%
        margin: 10px 0
        color: $color-text-ll
        font-size: $font-size-large
        line-height: 50px
        .icon
          float:left
          margin-top: 6px
          width: 36px
          height: 36px
          margin-right: 10px
          color: $color-text-l
          i
            font-size: 36px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: 0
          .name
            margin-bottom: 10px
            color: $color-text-ll
            font-size: $font-size-large
          .desc
            color: $color-text-l
            font-size: $font-size-small
        .weixin-box
          position: absolute
          left: 46px
          bottom: 0
          opacity: 0
          visibility: hidden
          border: 1px solid #ccc
          border-radius: 4px
          padding: 10px 20px
          text-align: center
          line-height: 20px
          font-size: $font-size-small
          color: $color-dialog-background
          background: $color-text
          transition: all 0.3s
      .item:nth-child(3)
        cursor: pointer
        &.item:nth-child(3):hover
          .weixin-box
            bottom: 60px
            opacity: 1
            visibility: visible
      @media screen and (max-width: 992px)
        .item
          width: 50%
          font-size: $font-size-medium-x
      @media screen and (max-width: 640px)
        .item
          width: 100%
          font-size: $font-size-medium
</style>
