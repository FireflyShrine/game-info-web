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
import InputMask from 'react-input-mask'

interface Props extends InputProps {
  name: string
  mask: string
  label?: string
}

const MaskInputField = ({ name, mask, label, ...rest }: Props) => {
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
        as={InputMask}
        ref={inputRef}
        defaultValue={defaultValue}
        isInvalid={!!error}
        errorBorderColor="red.300"
        bg={bgColor}
        mask={mask}
        maskChar={null}
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

export default MaskInputField
