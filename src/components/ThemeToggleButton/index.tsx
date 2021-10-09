import { DarkModeSwitch } from 'react-toggle-dark-mode'

interface Props {
  checked: boolean
  toggle?: () => void
}
const ThemeToggleButton = ({ checked, toggle }: Props) => {
  return (
    <DarkModeSwitch
      style={{ marginRight: 8 }}
      checked={checked}
      onChange={() => {
        if (toggle) {
          toggle()
        }
      }}
      size={20}
    />
  )
}

export default ThemeToggleButton
