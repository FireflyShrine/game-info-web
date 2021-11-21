import axios from "axios";
import { NextApiResponse } from "next";
import { CRequest } from "../../@types/requests-methods";
import useSession from "../../src/hooks/useSession";

export interface ILogin {
  email: string;
  password: string;
}

interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  role: string;
}

export interface IUser {
  user: User;
  token: string;
}

const BASE_URL = `${process.env.NEXT_PUBLIC_URL_API_CORE}/auth/sign-in`;

const handler = async (req: CRequest<ILogin>, res: NextApiResponse) => {
  try {
    const response = await axios.post<IUser>(BASE_URL, req.body);

    if (!response.data.token) {
      return res.status(401);
    }

    const user = { isLoggedIn: true, ...response.data };

    req.session.set("user", user);
    await req.session.save();

    return res.json(user);
  } catch (error) {
    console.log({ details: error });

    return res.status(500).json(error);
  }
};
export default useSession(handler);
