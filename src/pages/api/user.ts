import { NextApiResponse } from 'next'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import useSession from '../../src/hooks/useSession'
import { CRequest } from '../../@types/requests-methods'
import { IUser } from './login'

const verifyToken = (token: string) => {
  const expIn = jwt_decode<JwtPayload>(token)

  return expIn === 0
}

const handler = async (req: CRequest, res: NextApiResponse) => {
  const user = req.session.get('user') as IUser

  if (!user || verifyToken(user.token)) {
    return res.json({
      isLoggedIn: false,
    })
  }

  return res.json({
    isLoggedIn: true,
    ...user,
  })
}
export default useSession(handler)
