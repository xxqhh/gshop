/*
入口JS
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
/* eslint-disable no-new */
// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
