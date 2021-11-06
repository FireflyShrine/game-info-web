import { NextApiResponse } from 'next'
import { CRequest } from '../../@types/requests-methods'
import useSession from '../../src/hooks/useSession'

const handler = async (req: CRequest, res: NextApiResponse) => {
  req.session.destroy()
  return res.json({ isLoggedIn: false })
}
export default useSession(handler)
