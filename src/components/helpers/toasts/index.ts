import { UseToastOptions } from '@chakra-ui/toast'
import { toast } from '../../../styles/themes/theme'

const baseConfigs = {
  duration: 2500,
  isClosable: true,
}

export const error = (
  description: string,
  title = 'Ocorreu um erro!',
  args?: UseToastOptions
) => {
  toast({
    title,
    description,
    status: 'error',
    ...baseConfigs,
    ...args,
  })
}

export const warn = (
  description: string,
  title = 'Atenção!',
  args?: UseToastOptions
) => {
  toast({
    title,
    description,
    status: 'warning',
    ...baseConfigs,
    ...args,
  })
}

export const info = (
  description: string,
  title = 'Informação!',
  args?: UseToastOptions
) => {
  toast({
    title,
    description,
    status: 'info',
    ...baseConfigs,
    ...args,
  })
}

export const success = (
  description: string,
  title = 'Sucesso!',
  args?: UseToastOptions
) => {
  toast({
    title,
    description,
    status: 'success',
    ...baseConfigs,
    ...args,
  })
}
