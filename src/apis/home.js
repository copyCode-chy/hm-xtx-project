import request from '@/utils/request'

// 发送获取轮播图数据请求
export const getBannerList = () => {
  return request({
    url: 'home/banner'
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