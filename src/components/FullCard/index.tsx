import { Heading, Image, Text } from '@chakra-ui/react'
import { Box, Composition } from 'atomic-layout'
import React from 'react'
import Card from '../Card'
const layout = `
    imagem 
    titulo
    descricao
    botoes
`

type FullCardProps = {
  titulo: string
  descricao: string
  imagem: string
  botoesAcao: React.ReactNode
  maximoLinhasNaDescricao?: number
}
const FullCard = ({
  titulo,
  descricao,
  imagem,
  maximoLinhasNaDescricao,
  botoesAcao,
}: FullCardProps) => {
  return (
    <Composition areas={layout} as={Card} padding="15px" gap={15}>
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
            <Heading fontSize="lg">{titulo}</Heading>
          </Titulo>
          <Descricao>
            <Text fontSize="sm" noOfLines={maximoLinhasNaDescricao}>
              {descricao}
            </Text>
          </Descricao>
          <Botoes>{botoesAcao}</Botoes>
        </>
      )}
    </Composition>
  )
}

export default FullCard
