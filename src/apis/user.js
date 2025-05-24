// 此处为用户相关接口
import requst from '@/utils/request'

// 登录接口
export const loginApi = ({ account, password }) => {
  return requst({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}