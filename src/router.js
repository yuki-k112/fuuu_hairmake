import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from '@/views/Index.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/fuuu.hairmake/',
      name: 'index',
      component: Index,
      meta: { bodyClass: 'index' }
    },
    {
      path: '/fuuu.hairmake/concept',
      name: 'concept',
      component: () => import(/* webpackChunkName: "about" */ './views/Concept.vue'),
      meta: { bodyClass: 'concept' }
    },
    {
      path: '/fuuu.hairmake/menu',
      name: 'menu',
      component: () => import(/* webpackChunkName: "about" */ './views/Menu.vue'),
      meta: { bodyClass: 'menu' }
    },
    {
      path: '/fuuu.hairmake/access',
      name: 'access',
      component: () => import(/* webpackChunkName: "about" */ './views/Access.vue'),
      meta: {
        bodyClass: 'access' ,
      }
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
