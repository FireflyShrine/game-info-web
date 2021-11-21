import { Heading } from '@chakra-ui/react'
import { Composition } from 'atomic-layout'
import React, { PropsWithChildren } from 'react'
import Card from '../Card'
const layout = `     
    titulo
    corpo
    botoes
`

type SimpleCardProps = {
  titulo?: string
  botoesAcao: React.ReactNode
}
const SimpleCard = ({
  titulo,
  botoesAcao,
  children,
}: PropsWithChildren<SimpleCardProps>) => {
  return (
    <Composition areas={layout} as={Card} padding="25px 15px" gap={15}>
      {({ Titulo, Corpo, Botoes }) => (
        <>
          <Titulo>{titulo && <Heading fontSize="lg">{titulo}</Heading>}</Titulo>
          {children && <Corpo>{children}</Corpo>}
          <Botoes>{botoesAcao}</Botoes>
        </>
      )}
    </Composition>
  )
}

export default SimpleCard
