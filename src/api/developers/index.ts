import api from "..";

export interface IDeveloper {
  id: number;
  nome: string;
}

export interface ICreateDeveloper {
  nome: string;
}

export const createDeveloper = async (developer: ICreateDeveloper) => {
  try {
    const response = await api.post<ICreateDeveloper>(
      `http://localhost:8080/desenvolvedoras`,
      developer
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateDeveloper = async (
  idDeveloper: number,
  developer: ICreateDeveloper
) => {
  try {
    const response = await api.put<ICreateDeveloper>(
      `http://localhost:8080/desenvolvedoras/${idDeveloper}`,
      developer
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteIDeveloper = async (idDeveloper: number) => {
  try {
    const response = await api.delete(
      `http://localhost:8080/desenvolvedoras/${idDeveloper}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
