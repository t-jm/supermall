import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Mine = () => import('views/mine/Mine')
const Category = () => import('views/category/Category')
const Shop = () => import('views/shop/Shop')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: './home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/shop',
    component: Shop
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
