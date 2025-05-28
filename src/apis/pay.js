import request from '@/utils/request'

// 获取订单详情
export const getOrderApi = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}