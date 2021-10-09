import {
  FormControl,
  FormLabel,
  Text,
  Textarea,
  TextareaProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'

interface Props extends TextareaProps {
  name: string
  label?: string
}

const InputField = ({ name, label, ...rest }: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

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
      <Textarea
        ref={inputRef}
        defaultValue={defaultValue}
        isInvalid={!!error}
        bg={bgColor}
        errorBorderColor="red.300"
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
