import request from '@/utils/request'

// 发送获取轮播图数据请求
export const getBannerList = (option = {}) => {
  const { distributionSite = '1' } = option
  return request({
    url: 'home/banner',
    params: {
      distributionSite
    }
  })
}
// 发送获取新鲜好物数据请求
export const getNewList = () => {
  return request({
    url: 'home/new'
  })
}
// 发送获取人气推荐数据请求
export const getHotList = () => {
  return request({
    url: 'home/hot'
  })
}
// 获取所有商品模块
export const getGoodsList = () => {
  return request({
    url: 'home/goods'
  })
}