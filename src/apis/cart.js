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

// 删除购物车商品接口
export const removeCartItemApi = ([skuId]) => {
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids: [skuId]
    }
  })
}