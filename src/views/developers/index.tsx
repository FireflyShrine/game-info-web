import {
  Heading,
  HStack,
  IconButton,
  Tooltip,
  Grid,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { HiPlus } from 'react-icons/hi'

import { HospitalProps } from '../../api/hospitais'
import { useBreadcrumb } from '../../contexts/BreadcrumbProvider'
import { useFetch } from '../../hooks/useFetch'
import Layout from '../../layout'
import CardHospital from './card-hospital'

function Hospital() {
  const { changeBreadcrumbs } = useBreadcrumb()
  const router = useRouter()

  useEffect(() => {
    changeBreadcrumbs([{ title: 'Início', href: '/' }, { title: 'Hospitais' }])
  }, [])

  const { response, isLoading } = useFetch<HospitalProps[]>(`/hospitais`)

  return (
    <Layout>
      <HStack justifyContent="space-between" marginBottom={2}>
        <Heading size="lg" marginBottom={2}>
          Hospital
        </Heading>

        <Tooltip hasArrow label="Adicionar hospital" placement="auto">
          <IconButton
            colorScheme="blue"
            aria-label="Adição de hospital"
            margin={1}
            icon={<HiPlus />}
            onClick={() => router.push('/hospitais/form-hospital')}
          />
        </Tooltip>
      </HStack>
      {isLoading && <Text>Carregando hospitais...</Text>}
      <Grid
        mt={10}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
        gap={5}
      >
        {response?.map((x) => (
          <CardHospital key={`hospital-${x.id}`} hospital={x} />
        ))}
      </Grid>
    </Layout>
  )
}

export default Hospital
