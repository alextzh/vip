<template>
  <transition name="modal-fade">
    <div class="modal fade" ref="modal" :class="{in:isOpen}" @click.self="close" @keyup.ese="close"  tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content" rel="modalContent">
          <div v-if="needHeader" class="modal-header clearfix">
            <button type="button" class="close" @click="close"><i class="material-icons">close</i></button>
            <h4 class="modal-title">
              <slot name="title"></slot>
            </h4>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div v-if="needFooter" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      needHeader: {
        type: Boolean,
        default: true
      },
      needFooter: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        isOpen: false,
        lastKnownBodyStyle: {
          overflow: 'auto'
        }
      }
    },
    methods: {
      open () {
        this.isOpen = true
        this.$nextTick(() => {
          this.lastKnownBodyStyle.overflow = document.body.style.overflow
          document.body.style.overflow = 'hidden'
        })
      },
      close () {
        this.isOpen = false
        this.$nextTick(() => {
          document.body.style.overflow = this.lastKnownBodyStyle.overflow
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .modal
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index 66
    -webkit-overflow-scrolling touch
    outline 0
    overflow-x hidden
    overflow-y auto
    background rgba(0,0,0,.5)
    &.fade
      .modal-dialog
        transition: transform .3s ease-out
        transform: translate(0,-25%)
    &.in
      .modal-dialog
        transform: translate(0,0)
    .modal-dialog
      position relative
      width auto
      margin 10px
      height auto
      .modal-content
        position relative
        background-color #fff
        border 1px solid #999
        border-radius 6px
        box-shadow 0 3px 9px rgba(0, 0, 0, .5)
        background-clip padding-box
        outline 0
        .modal-header
          padding 15px
          .close
            float: right
            font-size: 24px
            font-weight: 700
            line-height: 1
            color: #000
            text-shadow: 0 1px 0 #fff
            opacity: .2
            -webkit-appearance: none
            padding: 0
            cursor: pointer
            background: 0 0
            border: 0
            margin-top: -2px
            outline none
            &.close:hover
              opacity 1
          .modal-title
            margin 0
            line-height 1.5
            font-size 18px
        .modal-body
          position relative
          padding 15px
        .modal-footer
          padding 15px
          text-align right // right align buttons
          border-top 1px solid #e5e5e5
  .fade
    &.in
      opacity 1
      visibility visible
    @media (min-width 768px)
      .modal-dialog
        width 738px
        margin 30px auto
        .modal-content
          box-shadow 0 5px 15px rgba(0,0,0,.5)
</style>
