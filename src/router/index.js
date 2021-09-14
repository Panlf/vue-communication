import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/views/Hello.vue'
import PropsAndEmits from '@/views/FatherAndSon/PropsAndEmits/Index.vue'

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
    component: PropsAndEmits
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
