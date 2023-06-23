import axios from 'axios'

interface IApi {
  method?: 'get' | 'post' | 'put' | 'delete';
  baseUrl?: string;
  path?: string;
  params?: Object;
}

export const API = async({
  method = 'get',
  baseUrl = 'https://randomuser.me/api',
  path = '',
  params = {},
}: IApi) => {

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  }

  const response = await axios[options.method](
    `${baseUrl}${path}`,
    options
  )

  return response?.data
}