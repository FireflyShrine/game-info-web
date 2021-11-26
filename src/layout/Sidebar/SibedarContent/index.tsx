import { useCallback } from 'react'
import {
  Divider,
  Flex,
  Heading,
  Menu,
  MenuItem,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import { HiLogout } from 'react-icons/hi'
import { useRouter } from 'next/router'

import Navigation from './Navigation'
import ThemeToggleButton from '../../../components/ThemeToggleButton'
import { fetcher } from '../../../hooks/fetcher'
import useUser from '../../../hooks/useUser'
interface Props {
  onClick: () => void
}

export const SibedarContent = ({ onClick }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const router = useRouter()

  const { mutateUser } = useUser({ redirectTo: '/login' })

  const logout = useCallback(async () => {
    await mutateUser(fetcher('/api/logout'))
    router.push('/')
  }, [router, mutateUser])

  return (
    <Flex h="100%" flexDir="column" justifyContent="space-between">
      <VStack>
        <Heading as="h4" size="md" mb="3">
          Game Info
        </Heading>
        <Divider display="flex" />

        <Navigation onClick={onClick} />
      </VStack>

      <div>
        <Flex p="2.5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
          <Divider display="flex" />

          <Flex mb={5} align="center">
            <Menu>
              <MenuItem onClick={toggleColorMode}>
                <ThemeToggleButton
                  checked={colorMode !== 'light'}
                  toggle={toggleColorMode}
                />
                Trocar Tema
              </MenuItem>
            </Menu>
          </Flex>
          <Flex>
            <Menu>
              <MenuItem onClick={logout} cursor="pointer">
                <HiLogout size={20} />
                <Text marginLeft={2}>Sair</Text>
              </MenuItem>
            </Menu>
          </Flex>
        </Flex>
      </div>
    </Flex>
  )
}

export default SibedarContent
