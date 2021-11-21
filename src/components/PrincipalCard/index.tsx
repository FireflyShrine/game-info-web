import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { Composition } from 'atomic-layout'
import React from 'react'
import Card from '../Card'

type PrincipalCardProps = {
  titulo: string
  descricao: string
  imagem: string
  botoesAcao: React.ReactNode
  maximoLinhasNaDescricao?: number
}

const layout = `
    imagem titulo
    imagem descricao
    imagem botoes
`

const PrincipalCard = ({
  titulo,
  descricao,
  imagem,
  botoesAcao,
  maximoLinhasNaDescricao = 5,
}: PrincipalCardProps) => {
  return (
    <Composition areas={layout} as={Card} gap={5} gapCol={20}>
      {({ Imagem, Titulo, Descricao, Botoes }) => (
        <>
          <Imagem as={Box}>
            <Image
              objectFit="cover"
              src={imagem}
              alt="image-principal"
              borderRadius="2xl"
            />
          </Imagem>
          <Titulo>
            <Heading fontSize="2xl">{titulo}</Heading>
          </Titulo>
          <Descricao>
            <Text noOfLines={maximoLinhasNaDescricao}>{descricao}</Text>
          </Descricao>
          <Botoes>{botoesAcao}</Botoes>
        </>
      )}
    </Composition>
  )
}

export default PrincipalCard
