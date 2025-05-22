import request from '@/utils/request'

// 获取商品详情数据
export const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}