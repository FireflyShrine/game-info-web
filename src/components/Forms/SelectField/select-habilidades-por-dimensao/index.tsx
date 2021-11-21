import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Stack,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import SelectField from '..'
import { useFetch } from '../../../../hooks/useFetch'
import { IHabilidadeDimensao } from '../../../../views/habilidades'

interface Props {
  name: string
  idDimensao: number | string
}
const SelectHabilidadesPorDimensao = ({ name, idDimensao }: Props) => {
  const { response, isLoading } = useFetch<IHabilidadeDimensao[]>(
    idDimensao ? `/habilidades/dimensao/${idDimensao}` : null
  )

  return (
    <Stack spacing={3}>
      <SelectField
        name={name}
        label="Habilidades"
        isLoading={isLoading || !response}
        isDisabled={!response}
        options={response.map((op) => ({ value: op.id, label: op.titulo }))}
      />

      <Alert status="error" variant="left-accent">
        <AlertIcon />

        <AlertTitle mr={2}>Dimensão não possui habilidades.</AlertTitle>

        <Link href={`/dimensoes/${idDimensao}/habilidades`}>
          <AlertDescription cursor="pointer" textDecoration="underline">
            Adicione uma habilidade!
          </AlertDescription>
        </Link>
      </Alert>
    </Stack>
  )
}

export default SelectHabilidadesPorDimensao
