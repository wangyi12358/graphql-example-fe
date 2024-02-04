import { getToken } from '@/utils/request'
import { message } from 'antd'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated/getSdk'

const endpoint = `${import.meta.env.VITE_BASE_URL}/query`
/**
 * 请求client
 */
export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
  responseMiddleware: (response) => {
    const _response = JSON.parse(JSON.stringify(response)) as {
      response: { errors?: Record<string, string>[]; status?: number };
    }

    if (_response?.response?.errors) {
      const error = _response?.response?.errors?.[0]?.message || '网络异常！'
      message.error(error)
    }
    if (process.env.NODE_ENV === 'development') return
    if (_response?.response?.status && response?.response?.status === 401) {
      // handleLogout()
    }
  },
})

export default getSdk(client)
