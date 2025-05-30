import request from '@/utils/request'

// 获取用户全部订单详情
export const getUserOrder = (params) => {
  return request({
    url: '/member/order',
    method: 'GET',
    params
  })
}