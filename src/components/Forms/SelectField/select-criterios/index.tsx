import React from 'react'
import SelectField from '..'
import { useFetch } from '../../../../hooks/useFetch'

export interface IDescritorCriterios {
  id: number
  nome: string
}

interface Props {
  name: string
}
const SelectCriterios = ({ name }: Props) => {
  const { response, isLoading } = useFetch<IDescritorCriterios[]>(
    `/descritores/criterios`
  )

  return (
    <SelectField
      name={name}
      label="Critérios"
      isLoading={isLoading || !response}
      options={response.map((op) => ({ value: op.id, label: op.nome }))}
    />
  )
}

export default SelectCriterios
