import { TColor } from '../styled-components'

export interface IThemeToggleContext {
  scheme: TColor
  setColorScheme: (scheme: TColor) => void
  toggleColorScheme: () => void
}
