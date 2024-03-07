export const state = () => ({
    rkat: [],
    data: [],
    errors: [],
    rkatUser: [],
})

export const mutations = {
    SET_RKAT_DATA(state, payload) {
        state.rkat = payload
    },
    
    SET_DATA(state, payload) {
        state.data = payload
    },
    
    SET_ERRORS(state, payload) {
        state.errors = payload
    },

    SET_RKAT_USER(state, payload) {
        state.rkatUser = payload
    },
}

export const actions = {
    getrkat({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/rkat/').then((res) => {
                commit('SET_RKAT_DATA', res.data.data)
                resolve()
            })
        })
    },
    getrkatID({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/rkat/${payload}`).then((res) => {
                commit('SET_DATA', res.data.data)
                resolve()
            })
        })
    },
    storerkat({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/rkat/', payload).then((res) => {
                dispatch('getrkat')
                resolve()
            })
            .catch((e) => {
                commit('SET_ERRORS', e.res.data)
            })
        })
    },
    updaterkat({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/rkat/${payload.id}`, payload).then((res) => {
                dispatch('getrkat')
                resolve()
            })
            .catch((e) => {
                commit('SET_ERRORS', e.res.data)
            })
        })
    },
    deleterkat({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/rkat/delete/${payload}`).then((res) => {
                dispatch('getrkat')
                resolve()
            })
            .catch((e) => {
                commit('SET_ERRORS', e.res.data)
            })
        })
    },
    deleteRows({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/rkat/deleteRows', payload).then(() => {
                dispatch('getrkat')
                resolve()
            })
            .catch((e) => {
                commit('SET_ERRORS', e.res.data)
            })
        })
    },
    getUser({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/user/rkatUser').then((res) => {
                commit('SET_RKAT_USER', res.data.data)
                resolve()
            })
        })
    },
}