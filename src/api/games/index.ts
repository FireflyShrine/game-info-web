import { IDeveloper } from "../developers";
import { IPlatform } from "../platforms";
import { url } from "../url";

export type IGames = {
  id: number;
  nome: string;
  image: string;
  plataforma: IPlatform[];
  desenvolvedora: IDeveloper[];
  data: string;
};

export type ICreateGames = {
  nome: string;
  image: string;
  plataformas: IPlatform[];
  desenvolvedoras: IDeveloper[];
  data: string;
};

export async function createGame(game: ICreateGames) {
  try {
    const response = await url.post<IGames>(
      `http://localhost:8080/jogos`,
      game
    );
    return response.data;
  } catch (err) {
    console.error({ details: err });
    throw err;
  }
}

export async function updateGame(idGame: number, game: ICreateGames) {
  try {
    const response = await url.put<ICreateGames>(
      `http://localhost:8080/jogos/${idGame}`,
      game
    );
    return response.data;
  } catch (err) {
    console.error({ details: err });
    throw err;
  }
}

export async function deleteGame(idGame: number) {
  try {
    const response = await url.delete(`http://localhost:8080/jogos/${idGame}`);
    return response.data;
  } catch (err) {
    console.error({ details: err });
    throw err;
  }
}
