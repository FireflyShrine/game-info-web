import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react'
import { TColor } from '../../../@types/styled-components'
import { IThemeToggleContext } from '../../../@types/toggle-provider'
import { usePersistedState } from '../../hooks/usePersistedState'

const ThemeToggleContext = createContext<IThemeToggleContext>({
  scheme: 'light',
  setColorScheme: () => false, // {}
  toggleColorScheme: () => false, // {}
})

export const useThemeToggle = () => {
  const context = useContext(ThemeToggleContext)
  return context
}

export default function ThemeToggleProvider({
  children,
  initialSchema = 'light',
}: PropsWithChildren<{ initialSchema: TColor }>) {
  const [schema, setSchema] = usePersistedState(
    '@app/colorScheme',
    initialSchema
  )

  const toggleColorScheme = useCallback(() => {
    setSchema(schema === 'light' ? 'dark' : 'light')
  }, [schema, setSchema])

  return (
    <ThemeToggleContext.Provider
      value={{
        scheme: schema,
        setColorScheme: setSchema,
        toggleColorScheme,
      }}
    >
      {children}
    </ThemeToggleContext.Provider>
  )
}
