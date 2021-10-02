import Vue from 'vue'
import Router from 'vue-router'
import MainManu from '@/components/MainManu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainManu',
      component: MainManu
    }
  ]
})
