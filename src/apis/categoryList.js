import request from '@/utils/request'

export function getCategoryList() {
  return request({
    url: 'home/category/head'
  })
}