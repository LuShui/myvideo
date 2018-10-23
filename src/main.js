// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import 'lib-flexible'
import 'vant/lib/vant-css/index.css'
import util from '@/lib/util'
import qs from 'qs'
Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.URL = util
Vue.prototype.$qs = qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
