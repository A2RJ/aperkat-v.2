export const state = () => ({
    nonRKAT: [],
    nonRKATById: [],
    subdivisinon: [],
    subdivisineedNonrkat: [],
    statusnon: [],
    historynon: [],
    errors: [],
})

export const mutations = {
    SET_NONRKAT(state, payload) {
        state.nonRKAT = payload
    },
    SET_NONRKATBYID(state, payload) {
        state.nonRKATById = payload
    },
    SET_SUBDIVISINON(state, payload) {
        state.subdivisinon = payload
    },
    SET_SUBDIVISINEED(state, payload) {
        state.subdivisineedNonrkat = payload
    },
    SET_STATUSNON(state, payload) {
        state.statusnon = payload
    },
    SET_HISTORYNON(state, payload) {
        state.historynon = payload
    },
    SET_APPROVENON(state, payload) {
        state.approvenon = payload
    },
    SET_DECLINENON(state, payload) {
        state.declinenon = payload
    },
    SET_ERRORS(state, payload) {
        state.errors = payload
    }
}

export const actions = {
    getNonRKAT({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/nonrkat/${payload}`).then((response) => {
                commit('SET_NONRKAT', response.data.data)
                resolve()
            })
        })
    },
    getNonRKATById({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/nonrkat/id/${payload}`).then((response) => {
                commit('SET_NONRKATBYID', response.data)
                resolve()
            })
        })
    },
    getSubdivisi({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/nonrkat/subdivisi/${payload}`).then((response) => {
                commit('SET_SUBDIVISINON', response.data.data)
                resolve()
            })
        })
    },
    subDivisiNeed({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/nonrkat/subDivisiNeed/${payload}`).then((response) => {
                commit('SET_SUBDIVISINEED', response.data.data)
                resolve()
            })
        })
    },
    approved({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/nonrkat/approved`, payload).then(() => {
                resolve()
            }).catch((e) => {
                commit('SET_ERRORS', e.response.data)
            })
        })
    },
    declined({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/nonrkat/declined`, payload).then(() => {
                resolve()
            }).catch((e) => {
                commit('SET_ERRORS', e.response.data)
            })
        })
    },
    storeNonRKAT({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/nonrkat/', payload).then((response) => {
                resolve()
            }).catch((e) => {
                commit('SET_ERRORS', e.response.data)
            })
        })
    },
    updateNonRKAT({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/nonrkat/${payload.id}`, payload).then((response) => {
                resolve()
            }).catch((e) => {
                commit('SET_ERRORS', e.response.data)
            })
        })
    },
    deleteNonRKAT({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/nonrkat/delete/`, payload).then((response) => {
                resolve()
            }).catch((e) => {
                commit('SET_ERRORS', e.response.data)
            })
        })
    },
    resetNonRKAT({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/nonrkat/delete/${payload}`).then((response) => {
                resolve()
            }).catch((e) => {
                commit('SET_ERRORS', e.response.data)
            })
        })
    },
}