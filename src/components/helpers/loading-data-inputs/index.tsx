import {
  FormControl,
  FormHelperText,
  HStack,
  Spinner,
  Text,
} from '@chakra-ui/react'
import React from 'react'

interface Props {
  isLoading: boolean
  helpText?: string
}
const LoadingDataInputs = ({ isLoading, helpText }: Props) => {
  if (!isLoading) return null
  else
    return (
      <FormControl>
        <FormHelperText>
          <HStack alignItems="center">
            <Text>{helpText ?? 'Buscando dados...'}</Text> <Spinner size="xs" />
          </HStack>
        </FormHelperText>
      </FormControl>
    )
}

export default LoadingDataInputs
