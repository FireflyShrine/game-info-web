import api from '..'
import { success, error } from '../../components/helpers/toasts'

export type Endereco = {
  cep: string
  cidade: string
  estado: string
  complemento: string
  logradouro: string
}

export type HospitalProps = {
  id: number
  nome: string
  cnpj: string
  cnes: string
  imagem: string
  latitude: string
  longitude: string
  status: boolean
  enderecoDto: Endereco
}

export type CriarHospital = {
  nome: string
  cnpj: string
  cnes: string
  imagem: string
  latitude: string
  longitude: string
  status: boolean
  enderecoDto: Endereco
}

export const criarHospital = async (hospital: CriarHospital) => {
  try {
    const response = await api.post<HospitalProps>(`hospitais`, hospital)
    success('Hospital cadastrado com sucesso!')
    return response.data
  } catch (err) {
    error('Erro ao cadastrar hospital.')
  }
}
