import axios from 'axios';

export default {
    namespaced: true,
    state() {
        return {
            products: [],
        }
    },
    mutations: {
        loadProducts(state, payload) {
            state.products = payload;
        }
    },
    actions: {
        async loadProducts(context) {
            try{
                const { data } = await axios.get('http://localhost:3000/products');
                context.commit('loadProducts', data);
            } catch (err) {
                console.log(err.message);
            }
        }
    },
    getters: {
        productsList(state) {
            return state.products;
        }
    }
}