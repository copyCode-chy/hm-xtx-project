import request from '@/utils/request'

export function getSecondCategory(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}