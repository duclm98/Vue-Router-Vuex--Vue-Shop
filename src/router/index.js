import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from '../views/ProductsList.vue';
import UserCart from '../views/UserCart.vue';
import ShopAdmin from '../views/ShopAdmin.vue';

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    name: 'ProductsList',
    component: ProductsList
  },
  {
    path: '/cart',
    name: 'UserCart',
    component: UserCart
  },
  {
    path: '/admin',
    name: 'ShopAdmin',
    component: ShopAdmin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
