export function getToken() {
    const tokeKey = 'token_' + getCompanyId()
    return localStorage.getItem(tokeKey) || ''
  }
  
  export function setToken(token) {
    const tokeKey = 'token_' + getCompanyId()
    localStorage.setItem(tokeKey, token)
  }
  
  export function removeToken() {
    const tokeKey = 'token_' + getCompanyId()
    localStorage.removeItem(tokeKey)
  }
  
  export function getUserInfo() {
    const userInfoKey = 'userInfo_' + getCompanyId()
    const userInfo = localStorage.getItem(userInfoKey) ? JSON.parse(localStorage.getItem(userInfoKey)) : ''
    return userInfo
  }
  
  export function setUserInfo(userInfo) {
    const userInfoKey = 'userInfo_' + getCompanyId()
    localStorage.setItem(userInfoKey, JSON.stringify(userInfo))
  }
  
  export function removeUserInfo() {
    const userInfoKey = 'userInfo_' + getCompanyId()
    localStorage.removeItem(userInfoKey)
  }
  
  export function getCompanyId() {
    const companyId = localStorage.getItem('companyId')
    return companyId
  }
  
  export function setCompanyId(companyId) {
    localStorage.setItem('companyId', companyId)
  }
  
  // 邀请码
  export function getInviteCode() {
    const inviteCodeKey = 'inviteCode_' + getCompanyId()
    const inviteCode = localStorage.getItem(inviteCodeKey)
    return inviteCode
  }
  
  export function setInviteCode(inviteCode) {
    const inviteCodeKey = 'inviteCode_' + getCompanyId()
    localStorage.setItem(inviteCodeKey, inviteCode)
  }
  