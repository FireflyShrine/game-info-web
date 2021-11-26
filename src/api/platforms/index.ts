import api from "..";

export interface IPlatform {
  id: number;
  nome: string;
}

export interface ICreatePlatform {
  nome: string;
}

export const createPlatform = async (platform: ICreatePlatform) => {
  try {
    const response = await api.post<IPlatform>(
      `http://localhost:8080/plataformas`,
      platform
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updatePlatform = async (
  idPlatform: number,
  platform: ICreatePlatform
) => {
  try {
    const response = await api.put<IPlatform>(
      `http://localhost:8080/plataformas/${idPlatform}`,
      platform
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deletePlatform = async (idPlatform: number) => {
  try {
    const response = await api.delete(
      `http://localhost:8080/plataformas/${idPlatform}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
