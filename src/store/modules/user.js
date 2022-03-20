import { login, getInfo } from '@/api/modules/user'
import { getToken, setToken, removeToken, getUserInfo, setUserInfo, getCompanyId } from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: getUserInfo(),
    companyId: getCompanyId()
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  // user login
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      login(params).then(res => {
        const userInfo = res.data
        commit('SET_TOKEN', res.data.accessToken)
        setToken(res.data.accessToken)
        commit('SET_USERINFO', userInfo)
        setUserInfo(userInfo)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      const params = { ...getUserInfo() }
      getInfo(params).then(res => {
        const userInfo = res.data
        commit('SET_USERINFO', userInfo)
        setUserInfo(userInfo)
        resolve(userInfo)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve) => {
      // commit('SET_TOKEN', '')
      commit('RESET_STATE')
      removeToken()
      resolve()
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      // commit('SET_TOKEN', '')
      commit('RESET_STATE')
      removeToken() // must remove  token  first
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
