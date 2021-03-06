import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/views/Hello.vue'

Vue.use(VueRouter)

const routes = [
  {
      path:'/',
      name:'Hello',
      component: Hello
  },
  {
    path: '/propsAndEmits',
    name: 'PropsAndEmits',
    component: () => import('@/views/FatherAndSon/PropsAndEmits/Index.vue')
  },
  {
    path: '/callback',
    name: 'CallBack',
    component: () => import('@/views/FatherAndSon/CallBack/Index.vue')
  },
  {
    path: '/attribute',
    name: 'Attribute',
    component: () => import('@/views/FatherAndSon/Attribute/Index.vue')
  },
  {
    path: '/provide',
    name: 'Provide',
    component: () => import('@/views/FatherAndSon/Provide/Index.vue')
  },
  {
    path: '/attrs',
    name: 'Attrs',
    component: () => import('@/views/FatherAndSon/Attrs/Index.vue')
  },
  {
    path: '/ref',
    name: 'Ref',
    component: () => import('@/views/FatherAndSon/Ref/Index.vue')
  },{
    path: '/eventBus',
    name: 'EventBus',
    component: () => import('@/views/Brothers/EventBus/Index.vue')
  },{
    path: '/emit',
    name: 'Emit',
    component: () => import('@/views/Brothers/Emit/Index.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
