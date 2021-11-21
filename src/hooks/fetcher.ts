import axios from 'axios'
import { SWRConfiguration } from 'swr'
import { HttpMethods } from '../../@types/requests-methods'

export async function fetcher<TResponse = any>(
  url: string,
  method: HttpMethods = 'get'
) {
  try {
    const response = await axios.request({ method, url })
    return response.data as TResponse
  } catch (error) {
    console.error('ERRO NA REQUISIÇÃO: ', error)
    throw error
  }
}

export const swrConfiguration: SWRConfiguration = {
  fetcher,
}
