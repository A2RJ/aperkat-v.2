export const state = () => ({
    isAuth: false,
    token: null,
    level: null
})

export const mutations = {
    SET_IS_AUTH(state, payload) {
        state.isAuth = payload
    },

    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedUser(state) {
        return state.auth.user[0]
    },

    SET_API_TOKEN(state, payload) {
        state.token = payload
    },

    SET_LEVEL(state, payload) {
        state.level = payload
    }
}

export const actions = {
    nuxtServerInit({ commit }, context) {
        if (context.app.$auth.strategy.token.status().valid()) {
            commit('SET_IS_AUTH', true);
        }
    }
}
