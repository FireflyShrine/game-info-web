import {
  createStandaloneToast,
  extendTheme,
  ThemeConfig,
  useColorModeValue,
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'
import colors from './colors'
import Button from './components/Button'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  breakpoints,
  colors,
  fonts: {
    heading: 'IBM Plex Sans, sans-serif',
    body: 'IBM Plex Sans, sans-serif',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0.025em',
    wide: '0.05em',
    wider: '0.1em',
    widest: '0.15em',
  },
  styles: {
    global: (props) => ({
      '.chakra-slide.chakra-modal__content form': {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      },
      body: {
        backgroundColor: props.colorMode === 'light' ? '#EBF4F8' : '#23222D',
      },
    }),
  },
  components: {
    Steps,
    Button,
  },
})

export const toast = createStandaloneToast({ theme })

export default theme
