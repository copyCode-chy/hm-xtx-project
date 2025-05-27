import request from '@/utils/request'

// 加入购物车接口
export const addCartApi = ({ skuId, count }) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 获取购物车列表接口
export const getCartListApi = () => {
  return request({
    url: '/member/cart'
  })
}