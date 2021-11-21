import React, { useEffect, useState } from 'react'
import SelectField from '..'
import { obterGeneros } from '../../../../api/core-cieds'

interface Props {
  name: string
}
const SelectGeneros = ({ name }: Props) => {
  const [response, setResponse] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function obterDados() {
      setLoading(true)
      const generos = await obterGeneros()
      setResponse(generos)
      setLoading(false)
    }

    obterDados()
  }, [])

  return (
    <SelectField
      name={name}
      label="Gêneros"
      isLoading={loading || !response}
      options={response.map((op) => ({ value: op.id, label: op.display }))}
    />
  )
}

export default SelectGeneros
