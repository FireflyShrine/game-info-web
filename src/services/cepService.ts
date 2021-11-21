import axios from 'axios'

export type CEP = {
  uf: string
  localidade: string
  logradouro: string
}

export async function buscarCep(cep: string) {
  try {
    cep = cep.replace(/[.]/g, '').replace(/[-]/g, '')
    const response = await axios.get<CEP>(
      `https://viacep.com.br/ws/${cep}/json`
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('ERRO AO BUSCAR O CEP. Detalhes:', error)
    return undefined
  }
}
