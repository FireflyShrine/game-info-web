import React, { useEffect, useState } from 'react'
import SelectField from '..'
import { obterRacas } from '../../../../api/core-cieds'

interface Props {
  name: string
}
const SelectRacas = ({ name }: Props) => {
  const [response, setResponse] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function obterDados() {
      setLoading(true)
      const racas = await obterRacas()
      setResponse(racas)
      setLoading(false)
    }

    obterDados()
  }, [])

  return (
    <SelectField
      name={name}
      label="Raças"
      isLoading={loading || !response}
      options={response.map((op) => ({ value: op.id, label: op.display }))}
    />
  )
}

export default SelectRacas
