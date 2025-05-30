// 此处为用户相关接口
import request from '@/utils/request'

// 登录接口
export const loginApi = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

// 猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}