import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import JointPurchase from 'components/joint-purchase/joint-purchase'
import ZhiyuanOperate from 'components/zhiyuan-operate/zhiyuan-operate'
import AboutUs from 'components/about-us/about-us'
import MessageBoard from 'components/message-board/message-board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/joint-purchase',
      component: JointPurchase
    },
    {
      path: '/zhiyuan-operate',
      component: ZhiyuanOperate
    },
    {
      path: '/about-us',
      component: AboutUs
    },
    {
      path: '/message-board',
      component: MessageBoard
    }
  ]
})
