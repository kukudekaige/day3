import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import List from '@/view/List'
import Car from '@/view/Car'
import My from '@/view/My'
import Dotail from '@/view/Dotail'
Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/list',
    name: 'List',
    component: List
  }, {
    path: '/car',
    name: 'Car',
    component: Car
  }, {
    path: '/my',
    name: 'My',
    component: My
  }, {
    path: '/dotail',
    name: 'Dotail',
    component: Dotail
  }
  ]
})
