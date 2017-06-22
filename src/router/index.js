import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Regin from '@/components/Regin'
import Hello from '@/components/Hello'
import ForgetPwd from '@/components/ForgetPwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
      {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/regin',
      name: 'Regin',
      component: Regin
    },
     {
      path: '/orgetPwd',
      name: 'ForgetPwd',
      component: ForgetPwd
    }
  ]
})
