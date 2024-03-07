export const state = () => ({
  user: [],
  userID: [],
  data: [],
  dataLogin: [],
  errors: [],
  userAfterLogin: [],
});

export const mutations = {
  SET_USER_DATA(state, payload) {
    state.user = payload;
  },

  SET_DATA(state, payload) {
    state.data = payload;
  },

  SET_USERID(state, payload) {
    state.userID = payload;
  },

  SET_DATA_LOGIN(state, payload) {
    state.dataLogin = payload;
  },

  SET_ERRORS(state, payload) {
    state.errors = payload;
  },

  SET_USER_AFTER_LOGIN(state, payload) {
    state.userAfterLogin = payload;
  },
};

export const actions = {
  getuser({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.get("/user/").then((response) => {
        commit("SET_USER_DATA", response.data.data);
        resolve();
      });
    });
  },
  dataLogin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/user/dataLogin/${payload}`).then((response) => {
        commit("SET_DATA_LOGIN", response.data.data);
        resolve();
      });
    });
  },
  getuserID({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/user/${payload}`).then((response) => {
        commit("SET_USERID", response.data.data);
        resolve();
      });
    });
  },
  storeuser({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post("/user/", payload)
        .then((response) => {
          dispatch("getuser");
          resolve();
        })
        .catch((e) => {
          commit("SET_ERRORS", e.response.data);
        });
    });
  },
  updateuser({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`/user/${payload.id}`, payload)
        .then((response) => {
          dispatch("getuser");
          resolve();
        })
        .catch((e) => {
          commit("SET_ERRORS", e.response.data);
        });
    });
  },
  deleteuser({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`/user/delete/${payload}`)
        .then((response) => {
          dispatch("getuser");
          resolve();
        })
        .catch((e) => {
          commit("SET_ERRORS", e.response.data);
        });
    });
  },
  setUserAfterLogin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      if (!payload) reject();
      commit("SET_USER_AFTER_LOGIN", payload);
      resolve();
    });
  },
};
