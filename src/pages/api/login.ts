import axios from "axios";
import { NextApiResponse } from "next";
import { CRequest } from "../../../@types/requests-methods";
import useSession from "../../hooks/useSession";

export interface ILogin {
  email: string;
  senha: string;
}

interface User {
  id: string;
  nome: string;
  email: string;
}

export interface IUser {
  usuario: User;
  token: string;
}

const BASE_URL = `${process.env.NEXT_PUBLIC_URL_API_CORE}/auth`;

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
