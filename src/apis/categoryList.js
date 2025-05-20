import request from '@/utils/request'

// 二级分类列表请求
export function getSecondCategory(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}