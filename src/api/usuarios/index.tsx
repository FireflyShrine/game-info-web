import api from '..'
import { success, error } from '../../components/helpers/toasts'

export type UsuarioProps = {
  id: string
  nome: string
  email: string
  senha: string
  confirmacaoSenha: string
}

export type DeleteUsuarioProps = {
  id: string
  nome: string
  email: string
}

export type CriarUsuario = {
  nome: string
  email: string
  senha: string
  confirmacaoSenha: string
}

export const criarUsuario = async (usuario: CriarUsuario) => {
  try {
    const response = await api.post<UsuarioProps>(
      `usuarios/usuariobackoffice`,
      usuario
    )
    success('Usuário cadastrado com sucesso!')
    return response.data
  } catch (err) {
    error('Erro ao cadastrar usuário.')
  }
}

export const editarUsuario = async (
  idUsuario: string,
  usuario: CriarUsuario
) => {
  try {
    const response = await api.put<UsuarioProps>(
      `/usuarios/${idUsuario}`,
      usuario
    )
    success('Usuário atualizado com sucesso!.')
    return response.data
  } catch (errors) {
    error(`${errors}`)
  }
}

export const deletarUsuario = async (idUsuario: string) => {
  try {
    const response = await api.delete(`usuarios/${idUsuario}`)
    success('Usuário removido.')
    return response.data
  } catch (errors) {
    error(`${errors}`)
  }
}
