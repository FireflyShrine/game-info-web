import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue,
} from '@chakra-ui/react'
import { Navigation } from '..'
import SidebarContent from './SibedarContent'

interface Props {
  onClose: () => void
  isOpen: boolean
  navVariant?: Navigation
}

const Sidebar = ({ isOpen, navVariant: variant, onClose }: Props) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      p={5}
      w="250px"
      top={0}
      h="100%"
      bg={useColorModeValue('white', 'gray.700')}
      left={0}
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar
