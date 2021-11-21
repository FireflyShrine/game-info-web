import React, { useEffect, useState } from 'react'
import SelectField from '..'
import { obterCidades } from '../../../../api/core-cieds'

interface Props {
  estado?: number
  name: string
}
const SelectCidades = ({ name, estado }: Props) => {
  const [response, setResponse] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function obterDados() {
      setLoading(true)
      const cidades = await obterCidades(estado ?? 0)
      setResponse(cidades)
      setLoading(false)
    }

    if (estado) {
      obterDados()
    }
  }, [estado])

  return (
    <SelectField
      name={name}
      label="Cidades"
      isLoading={loading || !response}
      isDisabled={!estado}
      options={response.map((op) => ({ value: op.id, label: op.display }))}
    />
  )
}

export default SelectCidades
