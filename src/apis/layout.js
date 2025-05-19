import request from '@/utils/request'

// 发送获取二级分类列表请求
export function getCategoryList() {
  return request({
    url: 'home/category/head'
  })
}