import request from '@/utils/request'

// 获取全部订单
export const getOrderApi = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}