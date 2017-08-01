import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VeeValidate, {Validator} from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

// 配置中文
Validator.addLocale(zhCN)

const config = {
  locale: 'zh_CN'
}
Vue.use(VeeValidate, config)

// 自定义validate  attributes就是 field
const dictionary = {
  zh_CN: {
    messages: {
      required: field => '请输入' + field,
      userName: () => '请输入正确的姓名',
      mobile: () => '请输入正确的手机号'
    },
    attributes: {
      userName: '姓名',
      mobile: '手机号'
    }
  }
}
Validator.updateDictionary(dictionary)

Validator.extend('mobile', {
  messages: {
    zh_CN: field => field + '必须是11位手机号码'
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})
Validator.extend('userName', {
  messages: {
    zh_CN: field => '请输入正确的' + field
  },
  validate: value => {
    return /^[\u4E00-\u9FA5]{2,4}$/.test(value)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
