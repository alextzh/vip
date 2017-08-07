<template>
  <div class="message-board">
    <div class="banner">
      <img src="~common/image/zy.jpg" alt="">
    </div>
    <div class="container">
      <form class="form-group" @submit.prevent="validateBeforeSubmit">
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
          <label class="label">留言板</label>
          <p class="control has-icon">
            <textarea name="board" v-model="board" class="textarea" maxlength="300" ref="textarea"></textarea>
          </p>
        </div>
        <div class="form-item clearfix">
          <p class="control">
            <button class="button" type="submit">提交</button>
          </p>
        </div>
      </form>
    </div>
    <simplert :useRadius="true" :useIcon="true" ref="simplert"></simplert>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  import Word from 'common/js/word'
  import Simplert from 'vue2-simplert'
  import {autoTextarea} from 'common/js/autoTextarea'

  export default {
    data () {
      return {
        userName: '',
        mobile: '',
        board: '',
        list: []
      }
    },
    mounted () {
      autoTextarea(this.$refs.textarea)
    },
    methods: {
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
        this.board = ''
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.insertWord(
              new Word({
                name: this.userName,
                mobile: this.mobile,
                content: this.board
              })
            )
            this.successAlert()
            return
          }
          this.failAlert()
        })
      },
      ...mapActions([
        'insertWord'
      ])
    },
    components: {
      Simplert
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .message-board
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
      .form-group
        background: $color-text
        border: 1px solid rgba(0,0,0,0,.3)
        border-radius: 4px
        padding: 70px 150px
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
            padding: 13px 15px 0
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
            .input,.textarea
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
            .input:hover,.textarea:hover
              border-color: #b5b5b5
            .input:active,.input:focus,.textarea:active,.textarea:focus
              border-color: #00d1b2
              outline: none
            .input.is-danger
              border-color: #ff3860
            .textarea
              height: 150px
              padding-right: 10px
              padding-top: 5px
              padding-bottom: 5px
              resize: none
              overflow: hidden
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
          padding: 30px 15px
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
