import api from '..'
import { success, error } from '../../components/helpers/toasts'

export type EspecialidadeProps = {
  id: number
  nomeEspecialidade: string
}

export type CriarEspecialidade = {
  nomeEspecialidade: string
}

export const criarEspecialidade = async (especialidade: CriarEspecialidade) => {
  try {
    const response = await api.post<EspecialidadeProps>(
      `especialidades`,
      especialidade
    )
    success('Especialidade cadastrada com sucesso!')
    return response.data
  } catch (err) {
    error('Erro ao cadastrar especialidade.')
  }
}

export const editarEspecialidade = async (
  idEspecialidade: number,
  especialidade: CriarEspecialidade
) => {
  try {
    const response = await api.put<EspecialidadeProps>(
      `/especialidades/${idEspecialidade}`,
      especialidade
    )
    success('Especialidade atualizada.')
    return response.data
  } catch (errors) {
    error(`${errors}`)
  }
}

export const deletarEspecialidade = async (idEspecialidade: number) => {
  try {
    const response = await api.delete(`/especialidades/${idEspecialidade}`)
    success('Especialidade removida.')
    return response.data
  } catch (errors) {
    error(`${errors}`)
  }
}
