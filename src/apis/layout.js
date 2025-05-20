import request from '@/utils/request'

// 全部分类列表请求
export function getCategoryList() {
  return request({
    url: 'home/category/head'
  })
}