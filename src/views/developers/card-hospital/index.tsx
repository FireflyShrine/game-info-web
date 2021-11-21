import { Image, Box, Heading, Text } from '@chakra-ui/react'
import { HospitalProps } from '../../../api/hospitais'

type CardProps = {
  hospital: HospitalProps
}

function CardHospital({ hospital }: CardProps) {
  return (
    <Box
      border="1px"
      borderColor="#999999"
      borderRadius="10px"
      width="200px"
      key={`hospital-${hospital.id}`}
    >
      <Image
        borderRadius="10px 10px 0px 0px"
        src={hospital.imagem}
        alt="hospital"
        boxSize="200"
        objectFit="cover"
      />
      <Heading fontSize={16} padding="8px">
        {hospital.nome}
      </Heading>
      <Text fontSize={13} padding="0px 8px 8px 8px">
        {hospital.enderecoDto.logradouro}, {hospital.enderecoDto.cidade} -{' '}
        {hospital.enderecoDto.estado}
      </Text>
    </Box>
  )
}

export default CardHospital
