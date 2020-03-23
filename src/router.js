import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import('@/views/home/Home.vue')
const Shop = ()=>import('@/views/shop/Shop.vue')
const Good = ()=>import('@/views/good/Good.vue')
const Order = ()=>import('@/views/order/Order.vue')
const Customer = ()=>import('@/views/customer/Customer.vue')
const PublishGood = ()=>import('@/views/good/PublishGood.vue')
const Login = ()=>import('@/views/login/Login.vue')



const router = new VueRouter({
  routes: [
    { path: '/shop', component: Shop},
    { path: '/good', component: Good},
    { path: '/order', component: Order},
    { path: '/publish', component: PublishGood},
    { path: '/customer', component: Customer},
    { path: '/', component: Home},
    {
      path: '/login',
      components: {
        login: Login
      }
    },
    { path: '/*', redirect: '/'}
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next)=> {
  const isLogin = localStorage.getItem('isLogin')
  console.log('isLogin', isLogin)

  if (to.path === '/login') {
    next()
  } else {
    if (isLogin == 1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
