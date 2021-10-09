import {
  FormControl,
  FormLabel,
  Input,
  InputProps,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'

interface Props extends InputProps {
  name: string
  label?: string
}

const InputField = ({ name, label, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },

      setValue: (ref, value) => {
        ref.current.value = value
      },

      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  const bgColor = useColorModeValue('white', 'gray.900')

  return (
    <FormControl>
      {label && <FormLabel htmlFor={fieldName}>{label}</FormLabel>}
      <Input
        ref={inputRef}
        defaultValue={defaultValue}
        isInvalid={!!error}
        errorBorderColor="red.300"
        bg={bgColor}
        {...rest}
      />

      {error && (
        <Text fontSize="xs" color="red.300">
          {error}
        </Text>
      )}
    </FormControl>
  )
}

export default InputField
