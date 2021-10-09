declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      type: TColor
      commom: {
        black: string
        white: string
        main: string
      }
      primary: {
        main: string
      }
      secondary: {
        main: string
      }
      error: {
        main: string
      }
      background: {
        body: string
        app: string
      }
      components: Components
      grey: GreyTheme
      text: Text
    }
    typography: {
      color: string
      input: string
    }
  }
}

type TColor = 'light' | 'dark'

interface Components {
  navbar: NavBar
}

interface NavBar {
  size: number | number
  background: string
}

export interface Text {
  primary: string
  secondary: string
  disabled: string
}

export interface GreyTheme {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  A100: string
  A200: string
  A300: string
  A400: string
  A700: string
}
