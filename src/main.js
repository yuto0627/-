import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import smoothScroll from 'vue-smoothscroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(smoothScroll)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App),
}).$mount('#app')
