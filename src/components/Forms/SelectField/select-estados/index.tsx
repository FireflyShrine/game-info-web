import React, { useEffect, useState } from 'react'
import SelectField from '..'
import { obterEstados } from '../../../../api/core-cieds'

interface Props {
  name: string
  onChange: (e: any) => void
}
const SelectEstados = ({ name, onChange }: Props) => {
  const [response, setResponse] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function obterDados() {
      setLoading(true)
      const estados = await obterEstados()
      setResponse(estados)
      setLoading(false)
    }

    obterDados()
  }, [])

  return (
    <SelectField
      name={name}
      label="Estados"
      isLoading={loading || !response}
      onChange={onChange}
      options={response.map((op) => ({ value: op.id, label: op.display }))}
    />
  )
}

export default SelectEstados
