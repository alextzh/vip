<template>
  <div class="zhiyuan-operate">
    <div class="banner">
      <img src="~common/image/zy.jpg" alt="">
    </div>
    <div class="container">
      <ul class="content-box clearfix">
        <li class="item left">
          <p>关注至元操盘公众号</p>
          <img src="./zycp.jpg" width="200" height="200" alt="">
        </li>
        <li class="item right">
          <div class="text"><i class="material-icons">call</i><span>18518630066</span></div>
          <div class="text">
            <i class="material-icons">chat</i>
            <span>至元操盘客服微信</span>
            <div class="weixin-box">
              <p>扫一扫添加客服微信</p>
              <img src="./zycpkf.jpg" width="150" height="150" alt="">
              <p>微信号: zycpkf</p>
            </div>
          </div>
          <a class="advice-btn" href="javascript:void(0);" @click="showModel">立即咨询产品</a>
        </li>
      </ul>
    </div>
    <modal ref="theModal" :needHeader="true" :needFooter="false">
      <form slot="body" class="form-group" @submit.prevent="validateBeforeSubmit">
        <div class="form-item clearfix">
          <label class="label">姓名</label>
          <p class="control has-icon">
            <input type="text" ref="userName" v-model="userName" name="userName" v-validate="'required|userName'" :class="{'input': true, 'is-danger': errors.has('userName') }" placeholder="请输入姓名">
            <i v-show="errors.has('userName')" class="material-icons">error</i>
            <span v-show="errors.has('userName')" class="help is-danger">{{ errors.first('userName') }}</span>
          </p>
        </div>
        <div class="form-item clearfix">
          <label class="label">手机号</label>
          <p class="control has-icon">
            <input type="text" ref="mobile" v-model="mobile" name="mobile" v-validate="'required|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile') }" placeholder="请输入手机号">
            <i v-show="errors.has('mobile')" class="material-icons">error</i>
            <span v-show="errors.has('mobile')" class="help">{{ errors.first('mobile') }}</span>
          </p>
        </div>
        <div class="form-item clearfix">
          <label class="label">合同邮寄地址</label>
          <v-distpicker ref="distPicker" :placeholders="placeholders" @province="currentProvince" @city="currentCity" @area="currentArea"></v-distpicker>
          <p class="control has-icon" style="margin-top: 20px">
            <input class="input" v-model="address" type="text" name="address" placeholder="请输入详细地址">
          </p>
        </div>
        <div class="form-item clearfix">
          <p class="control">
            <button class="button" type="submit">立即咨询</button>
          </p>
        </div>
      </form>
    </modal>
    <simplert :useRadius="true" :useIcon="true" ref="simplert"></simplert>
  </div>
</template>

<script type="text/ecmascript-6">
  import Modal from 'components/modal/modal'
  import Simplert from 'vue2-simplert'
  import VDistpicker from 'v-distpicker'
  import Advice from 'common/js/advice'
  import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        userName: '',
        mobile: '',
        address: '',
        placeholders: {
          province: '------- 省 --------',
          city: '--- 市 ---',
          area: '--- 区 ---'
        },
        province: '',
        city: '',
        area: ''
      }
    },
    mounted () {
      let width = document.body.clientWidth
      this.children = this.$refs.distPicker.$el.children
      if (width <= 768) {
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          child.style.marginBottom = '20px'
          child.style.display = 'block'
        }
        this.children[this.children.length - 1].style.marginBottom = 0
      }
    },
    methods: {
      currentProvince (val) {
        this.province = val.value
      },
      currentCity (val) {
        this.city = val.value
      },
      currentArea (val) {
        this.area = val.value
      },
      successAlert () {
        let obj = {
          title: '提交成功',
          message: '客服近期会与您联系',
          type: 'success',
          customCloseBtnText: '关闭',
          onClose: this.onClose()
        }
        this.$refs.simplert.openSimplert(obj)
      },
      failAlert () {
        let obj = {
          title: '提交失败',
          message: '您未填写完表单',
          type: 'error',
          customCloseBtnText: '关闭'
        }
        this.$refs.simplert.openSimplert(obj)
      },
      onClose () {
        this.userName = ''
        this.mobile = ''
        this.address = ''
        this.placeholders = {
          province: '------- 省 --------',
          city: '--- 市 ---',
          area: '--- 区 ---'
        }
      },
      showModel () {
        this.$refs.theModal.open()
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.insertAdvice(new Advice(
              {
                name: this.userName,
                mobile: this.mobile,
                address: this.retAddress()
              }
            ))
            this.successAlert()
            return
          }
          this.failAlert()
        })
      },
      retAddress () {
        let ret = ''
        ret += this.province + this.city + this.area + this.address
        return ret
      },
      ...mapActions([
        'insertAdvice'
      ])
    },
    components: {
      Modal,
      VDistpicker,
      Simplert
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .zhiyuan-operate
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
          width: 50%
          float: left
          box-sizing: border-box
          &.left
            text-align: center
            p
              display: inline-block
              font-size: 20px
              color: #333
              margin-bottom: 10px
            img
              display: block
              margin: 0 auto
          &.right
            padding: 0 15px
            .text
              padding: 20px 0
              color: #333
              span
                padding-left: 10px
                font-size: 20px
                vertical-align: middle
              i
                font-size: 30px
                vertical-align: middle
                color: #5d5d5d
              .weixin-box
                position: absolute
                left: 6px
                bottom: 0
                transform: translate3d(0,0,0)
                opacity: 0
                visibility: hidden
                padding: 10px 20px
                text-align: center
                line-height: 20px
                border: 1px solid #ccc
                border-radius: 4px
                font-size: $font-size-small
                color: $color-dialog-background
                background: $color-text
                transition: all 0.3s
            .text:nth-child(2)
              position: relative
              cursor: pointer
              &.text:nth-child(2):hover, &.text:nth-child(2):active
                .weixin-box
                  bottom: 60px
                  opacity: 1
                  visibility: visible
            .advice-btn
              display: block
              width: 150px
              height: 40px
              text-align: center
              line-height: 40px
              font-size: 16px
              color: #fff
              background: #f34242
              margin-top: 24px
              border-radius: 4px
        @media screen and (max-width: 640px)
          .item
            width: 100%
            &.right
              .text
                text-align: center
                .weixin-box
                  left: 50%
                  transform: translate3d(-50%,0,0)
              .advice-btn
                margin: 40px auto 0
    .form-group
      background: $color-text
      border: 1px solid rgba(0,0,0,0,.3)
      border-radius: 4px
      padding: 30px
      width: 100%
      box-sizing: border-box
      .form-item
        position: relative
        width: 100%
        padding: 10px
        box-sizing: border-box
        .label
          display: inline-block
          float: left
          width: 16.66666667%
          text-align: right
          padding: 13px 15px 0 0
          margin-bottom: 0
          box-sizing: border-box
          color: #363636
          font-size: 14px
        .control
          position: relative
          float: right
          text-align: left
          display: block
          width: 83.33333333%
          &.has-icon
            i
              display: inline-block
              font-size: 14px
              height: 24px
              line-height: 24px
              text-align: center
              vertical-align: top
              width: 24px
              color: #f34242;
              pointer-events: none
              position: absolute
              top: 8px
              right: 4px
              z-index: 4
            .help
              display: block
              color: #ff3860
              font-size: 12px
              margin-top: 10px
              margin-left: 10px
          .input
            background-color: #fff
            border: 1px solid #dbdbdb
            border-radius: 4px
            color: #363636
            font-size: 14px
            height: 40px
            line-height: 24px
            padding-left: 10px
            padding-right: 32px
            position: relative
            vertical-align: top
            box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1)
            max-width: 100%
            width: 100%
            outline: 0 none
            box-sizing: border-box
          .input:hover
            border-color: #b5b5b5
          .input:active,.input:focus
            border-color: #00d1b2
            outline: none
          .input.is-danger
            border-color: #ff3860
          .button
            background-color: #f34242
            border-radius: 4px
            color: #fff
            font-size: 14px
            height: 40px
            line-height: 40px
            cursor: pointer
            padding: 0 30px
            outline: none
            border: none
          .button:active,.button:focus,.button:hover
            background: #f53131
    @media screen and (max-width: 992px)
      .form-group
        padding: 0 15px 30px
        .form-item
          .label
            display: block
            width: 100%
            float: none
            margin-bottom: 10px
            padding: 0 5px
            text-align: left
          .control
            float: none
            width: 100%
</style>
