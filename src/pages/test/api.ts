import { API } from '@/api/api'

export const getAuthors = async() => {
  const data = await API({
    baseUrl: 'http://www.mocky.io/v2/',
    path: '5e1684a93000002c00d5608e',
    method: 'get'
  })
  return data
}

export const getBooks = async() => {
  const data = await API({
    baseUrl: 'http://www.mocky.io/v2/',
    path: '5e1683a23000004d00d56089',
    method: 'get'
  })
  return data
}
