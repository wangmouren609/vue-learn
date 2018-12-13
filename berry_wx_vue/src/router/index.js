import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ResourceList from '@/components/ResourceList'
import UserDetails from '@/components/UserDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/resourceList',
      name: 'ResourceList',
      component: ResourceList
    }, {
      path: '/userDetails',
      name: 'UserDetails',
      component: UserDetails
    }
  ]
})
