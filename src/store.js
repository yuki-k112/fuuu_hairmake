import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import store_concept from '@/store/concept.js'
import store_nav from '@/store/nav.js'

export default new Vuex.Store({
  modules:{
    store_concept,
    store_nav
  }
})
