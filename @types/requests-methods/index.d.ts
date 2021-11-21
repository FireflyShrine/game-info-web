import { NextApiRequest } from 'next'
import { Session } from 'next-iron-session'

export type HttpMethods =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'head'
  | 'link'

export type SuccessCallback = (data: any | undefined) => void
export type FailedCallback = (errors: any | undefined) => void

export interface CRequest<T = any> extends NextApiRequest {
  body: T
  session: Session
}
