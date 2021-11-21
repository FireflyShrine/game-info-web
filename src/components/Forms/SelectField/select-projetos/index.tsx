import React, { useEffect, useState } from 'react'
import SelectField from '..'
import { obterProjetos } from '../../../../api/core-cieds'

interface Props {
  name: string
  onChange?: (e: any) => void
}
const SelectProjetos = ({ name, onChange }: Props) => {
  const [response, setResponse] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function obterDados() {
      setLoading(true)
      const projetos = await obterProjetos()
      setResponse(projetos)
      setLoading(false)
    }

    obterDados()
  }, [])

  return (
    <SelectField
      name={name}
      label="Projetos"
      isLoading={loading || !response}
      onChange={onChange}
      options={response.map((op) => ({ value: op.id, label: op.display }))}
    />
  )
}

export default SelectProjetos
