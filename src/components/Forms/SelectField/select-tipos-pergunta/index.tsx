import React from 'react'
import SelectField from '..'
import { useFetch } from '../../../../hooks/useFetch'

export type TipoPergunta = {
  id: number
  nome: string
}

interface Props {
  name: string
}
const SelectTiposPergunta = ({ name }: Props) => {
  const { response, isLoading } = useFetch<TipoPergunta[]>(`/perguntas/tipos`)

  return (
    <SelectField
      name={name}
      label="Tipos de pergunta"
      isLoading={isLoading || !response}
      options={response.map((op) => ({ value: op.id, label: op.nome }))}
    />
  )
}

export default SelectTiposPergunta
