import { Heading, Text, VStack } from '@chakra-ui/react'
import React, { useMemo } from 'react'
const layout = `
    header 
    titulo
    descricao
`

type IconCardProps = {
  titulo: string
  descricao: string
  icone: React.ReactNode
  maximoLinhasNaDescricao?: number
  tipo?: 'primario' | 'sucesso' | 'atencao' | 'perigo'
  onClick?: () => void
}
const IconCard = ({
  titulo,
  descricao,
  icone,
  maximoLinhasNaDescricao,
  onClick,
  tipo = 'primario',
}: IconCardProps) => {
  const cor = useMemo(() => {
    switch (tipo) {
      case 'atencao':
        return 'yellow.400'
      case 'perigo':
        return 'red.500'
      case 'sucesso':
        return 'blue.500'
      case 'primario':
        return 'blue.600'
    }
  }, [tipo])

  return (
    <VStack
      padding="25px"
      gap={15}
      borderRadius="3xl"
      bg={cor}
      color="white"
      alignItems="flex-start"
      onClick={onClick}
      cursor={onClick && 'pointer'}
      transition="0.2s"
      _hover={{
        transform: 'scale(1.05)',
      }}
    >
      {icone}
      <Heading fontSize="lg">{titulo}</Heading>
      <Text fontSize="sm" noOfLines={maximoLinhasNaDescricao}>
        {descricao}
      </Text>
    </VStack>
  )
}

export default IconCard
