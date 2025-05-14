import request from '@/utils/request'

export function getTestData() {
  return request({
    url: 'home/category/head'
  })
}