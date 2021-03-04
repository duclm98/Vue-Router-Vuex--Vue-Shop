import { createStore } from 'vuex';

import authModule from './modules/auth';
import productsModule from './modules/products';
import cartModule from './modules/cart';

export default createStore({
  modules: {
    auth: authModule,
    prods: productsModule,
    cart: cartModule,
  }
})
