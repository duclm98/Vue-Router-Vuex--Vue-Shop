export default {
    namespaced: true,
    state() {
        return {
            items: [],
            total: 0,
            qty: 0
        };
    },
    mutations: {
        addProductToCart(state, payload) {
            const product = payload;
            const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === product.id
            );

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += product.price;
        },
        removeProductFromCart(state, payload) {
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === payload.productId
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        },
    },
    actions: {
        addToCart(context, payload) {
            const prodId = payload.id;
            const products = context.rootGetters['prods/productsList'];
            const product = products.find(prod => prod.id === prodId);
            context.commit('addProductToCart', product);
        },
        removeFromCart(context, payload) {
            context.commit('removeProductFromCart', payload);
        },
    },
    getters: {
        cartItems(state) {
            return state.items;
        },
        cartTotal(state) {
            return state.total;
        },
        cartQty(state) {
            return state.qty;
        },
    }
}