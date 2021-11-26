import { IDeveloper } from "../developers";
import { IPlatform } from "../platforms";
import { url } from "../url";

export type IGames = {
  id: number;
  nome: string;
  plataforma: IPlatform[];
  desenvolvedora: IDeveloper[];
  dataLancamento: Date;
};

export type ICreateGames = {
  nome: string;
  plataforma: IPlatform[];
  desenvolvedora: IDeveloper[];
  dataLancamento: Date;
};

export async function createGame(game: ICreateGames) {
  try {
    const response = await url.post<IGames>(`jogos`, game);
    return response.data;
  } catch (err) {
    console.error({ details: err });
    throw err;
  }
}

export async function updateGame(idGame: number, game: ICreateGames) {
  try {
    const response = await url.put<ICreateGames>(`/jogos/${idGame}`, game);
    return response.data;
  } catch (err) {
    console.error({ details: err });
    throw err;
  }
}

export async function deleteGame(idGame: number) {
  try {
    const response = await url.delete(`/jogos/${idGame}`);
    return response.data;
  } catch (err) {
    console.error({ details: err });
    throw err;
  }
}
