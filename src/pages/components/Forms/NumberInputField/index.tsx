import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField as NumberField,
  NumberInputProps,
  NumberInputStepper,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'

interface Props extends NumberInputProps {
  name: string
  label?: string
}

const NumberInputField = ({ name, label, ...rest }: Props) => {
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
        if (value || value === 0) {
          ref.current.value = value
        }
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

      <NumberInput defaultValue={defaultValue} name={fieldName} {...rest}>
        <NumberField
          ref={inputRef}
          isInvalid={!!error}
          errorBorderColor="red.300"
          name={fieldName}
          id={fieldName}
          defaultValue={defaultValue}
          bg={bgColor}
        />

        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      {error && (
        <Text fontSize="xs" color="red.300">
          {error}
        </Text>
      )}
    </FormControl>
  )
}

export default NumberInputField
