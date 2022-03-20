const getters = {
  loading: state => state.app.loading,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  userName: state => state.user.userInfo.name,
}
export default getters
