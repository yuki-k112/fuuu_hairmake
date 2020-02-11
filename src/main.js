import Vue from 'vue'
import App from './App.vue'
import VueHead from 'vue-head'
import router from './router'
import store from './store'
import BodyClass from 'vue-body-class'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(VueHead)
Vue.use(BodyClass, router)
Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -100
})

new Vue({
  router,
  store,
  VueHead,
  render: h => h(App)
}).$mount('#app')

require('@/scss/style.scss')
