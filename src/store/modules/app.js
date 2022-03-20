const state = {
    loading: false
  }
  const mutations = {
    SET_LOADING: (state, status) => {
      state.loading = status
    }
  }
  export default {
    namespaced: true,
    state,
    mutations
  }
