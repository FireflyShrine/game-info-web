import { Box, Grid, Heading } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/spinner'
import { useFetch } from '../../hooks/useFetch'
import { FaHospital, FaHeart, FaUserMd } from 'react-icons/fa'

import Layout from '../../layout'

type IndicadoresProps = {
  totalMedicos: number
  totalHospitais: number
  totalMatches: number
}

const Home = () => {
  const { response, isLoading } =
    useFetch<IndicadoresProps>(`metricas/indicadores`)

  return (
    <Layout>
      <Grid
        marginTop={5}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={5}
      >
        <Box borderWidth="1px" borderRadius="lg" padding={2}>
          <Heading
            fontSize={15}
            display="flex"
            flexDir="row"
            alignItems="center"
          >
            <FaHospital size={20} style={{ marginRight: 5 }} /> Total de
            Hospitais
          </Heading>
          <Heading fontSize={40} mt={5} textAlign="center">
            {isLoading && response?.totalHospitais != 0 ? (
              <Spinner />
            ) : (
              response?.totalHospitais
            )}
          </Heading>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" padding={2}>
          <Heading
            fontSize={15}
            display="flex"
            flexDir="row"
            alignItems="center"
          >
            {' '}
            <FaUserMd size={20} style={{ marginRight: 5 }} /> Total de Médicos
          </Heading>
          <Heading fontSize={40} mt={5} textAlign="center">
            {isLoading && response?.totalMedicos != 0 ? (
              <Spinner />
            ) : (
              response?.totalMedicos
            )}
          </Heading>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" padding={2}>
          <Heading
            fontSize={15}
            display="flex"
            flexDir="row"
            alignItems="center"
          >
            <FaHeart size={20} style={{ marginRight: 5 }} /> Total de Matches
          </Heading>
          <Heading fontSize={40} mt={5} textAlign="center">
            {isLoading && response?.totalMatches != 0 ? (
              <Spinner />
            ) : (
              response?.totalMatches
            )}
          </Heading>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Home
