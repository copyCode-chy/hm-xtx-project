// 订单结算页接口
import request from '@/utils/request'

// 生成订单接口
export const getCheckInfoApi = () => {
  return request({
    url: '/member/order/pre'
  })
}