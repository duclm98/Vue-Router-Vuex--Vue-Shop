export default {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        },
    },
    actions: {
        login(context) {
            context.commit('setAuth', {
                isAuth: true
            });
        },
        logout(context) {
            context.commit('setAuth', {
                isAuth: false
            });
        },
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        },
    },
}