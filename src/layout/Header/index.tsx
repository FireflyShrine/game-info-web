import { Flex, Box, IconButton, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface Props {
  onShowSidebar: () => void
  showSidebarButton?: boolean
}

const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  return (
    <Flex bg={useColorModeValue('gray.100', 'gray.700')}>
      <Flex
        px={4}
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box>
          {showSidebarButton && (
            <IconButton
              aria-label="toggle menu"
              icon={<ChevronRightIcon w={8} h={8} />}
              colorScheme={useColorModeValue('blackAlpha', 'white')}
              variant="outline"
              onClick={onShowSidebar}
            />
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
