import React from 'react'
import SelectField from '..'
import { PagedList } from '../../../../../@types/paged-list'
import { useFetch } from '../../../../hooks/useFetch'
import { IHabilidadeDimensao } from '../../../../views/habilidades'

interface Props {
  name: string
}
const SelectHabilidades = ({ name }: Props) => {
  const { response, isLoading } =
    useFetch<PagedList<IHabilidadeDimensao>>(`/habilidades`)

  return (
    <SelectField
      name={name}
      label="Habilidades"
      isLoading={isLoading || !response}
      options={response?.items?.map((op) => ({
        value: op.id,
        label: op.titulo,
      }))}
    />
  )
}

export default SelectHabilidades
