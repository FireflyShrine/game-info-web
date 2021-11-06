// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { NextApiResponse } from "next";
import { withIronSession } from "next-iron-session";
import { CRequest } from "../../@types/requests-methods";

export default function useSession(
  handler: (req: CRequest, res: NextApiResponse) => void
) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD ?? "",
    cookieName: "@game-info/user",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
  });
}
