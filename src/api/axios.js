import axios from 'axios'
import router from '@/router'
import { getToken, removeToken, removeUserInfo, getUserInfo } from '@/utils/auth'
import { Toast } from 'vant';

// 参数默认类型
axios.defaults.headers['Content-Type'] = 'application/json;'
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor 请求拦截器
service.interceptors.request.use(
  config => {
    // 如果有token 给请求头添加token
    // if (store.getters.token) {
      config.headers['Access-Token'] = getToken() || ''
      // if (config.headers['Content-Type'] === 'multipart/form-data') {
      //   config.data.append('companyId', getCompanyId())
      //   config.data.append('userId', store.getters.userInfo.userId)
      // } else {
      //   config.data = { ...config.data, companyId: getCompanyId(), userId: store.getters.userInfo.userId }
      // }
    // } else {
      const { userId } = getUserInfo()
      {
        config.data = {
            ...config.data
        }
      // }
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor 响应拦截器
service.interceptors.res.use(
  res => {
    if (res.status === 200) {
      // return Promise.resolve(response);
      const res = res.data
      // if the custom code is not 20000, it is judged as an error.
      if (res.code && res.code !== '') {
        switch (res.vode) {
          case '':
            // 没有权限
            // Message({
            //   message: res.msg,
            //   type: 'error',
            //   duration: 1500,
            //   onClose: () => {
            //     location.href = '/bms/#/'
            //   }
            // })
            break
          default:
            Toast(res.msg)
            break
        }
        return Promise.reject(new Error(res.msg || 'Error'))
      } else if (res.bizCode && res.bizCode !== 'SUCCESS') {
        switch (res.bizCode) {
          // 审核中
          case 'WAIT_AUDIT':
            return Promise.reject(res.bizCode)
          // 请求未授权，请先登录授权
          case 'NOT_ACCESS_TOKEN':
            removeToken()
            removeUserInfo()
            Toast(res.msg)
            router.push('/login')
            break
          // token 失效
          case 'ACCESS_TOKEN_EXPIRED':
            removeToken()
            removeUserInfo()
            Toast(res.msg)
            router.push('/login')
            break
            // return Promise.reject(new Error(res.msg || 'Error'))
          // 授权用户验证未通过
          case 'ACCESS_TOKEN_VALID_FAIL':
            removeToken()
            removeUserInfo()
            Toast(res.msg)
            router.push('/login')
            break
          default:
            Toast(res.msg)
            return Promise.reject(new Error(res.msg || 'Error'))
        }
        const data = res.data || {}
        // const errLogList = data.errLogList || ''
        if (errLogList && errLogList.length > 0) {
          return res.data
        } else {
          Toast(res.msg)
          return Promise.reject(new Error(res.msg || 'Error'))
        }
      } else {
        return res
      }
    } else {
      console.log('http状态码不是200!')
      return Promise.reject(res)
    }
  },
  error => {
    console.log('err' + error) // for debug
	Toast(error.message)
    return Promise.reject(error)
  }
)

export default service
