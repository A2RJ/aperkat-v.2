export const state = () => ({
    success: [],
    errors: [],
})

export const mutations = {
    SET_SUCCESS(state, payload) {
        state.success = payload
    },

    SET_ERRORS(state, payload) {
        state.errors = payload
    },
}

export const actions = {
    action({ commit }, payload) {
        return new Promise((resolve, reject) => {
            if (payload.route == "GET") {
                this.$axios.get(payload.link)
                    .then((r) => {
                        commit('SET_SUCCESS', r.data.data)
                        resolve()
                    }).catch((e) => {
                        commit('SET_ERRORS', e.response.data)
                    })
            } else if (payload.route == "POST") {
                this.$axios.post(payload.link, payload.data)
                    .then((r) => {
                        commit('SET_SUCCESS', r.data.data)
                        resolve()
                    }).catch((e) => {
                        commit('SET_ERRORS', e.response.data)
                    })
            }
        })
    }
}