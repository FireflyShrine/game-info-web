import {
  FormControl,
  FormLabel,
  Select,
  SelectProps,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useField } from '@unform/core'
import { useEffect, useRef } from 'react'
export interface SelectOption {
  value: any
  label: string
}

export interface CustomSelectProps extends SelectProps {
  name: string
  options: SelectOption[]
  label?: string
  isLoading?: boolean
}

const SelectField = ({
  name,
  label,
  isLoading,
  options,
  ...rest
}: CustomSelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null)

  const {
    fieldName,
    defaultValue = rest.defaultValue,
    registerField,
    error,
  } = useField(name)
  console.log('DEFAULT => ', selectRef)
  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: (ref) => {
        return ref.current?.value
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue
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

      <Select
        id={fieldName}
        name={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        bg={bgColor}
        placeholder={
          rest.isDisabled ? 'Sem dados' : isLoading ? 'Buscando dados...' : ''
        }
        isDisabled={isLoading ?? rest.isDisabled}
        isInvalid={!!error}
        {...rest}
      >
        <option>Selecione...</option>
        {options.map((op) => (
          <option
            key={`select-${fieldName}-${op.value}`}
            value={op.value}
            selected={op.value === defaultValue}
          >
            {op.label}
          </option>
        ))}
      </Select>

      {error && (
        <Text fontSize="xs" color="red.300">
          {error}
        </Text>
      )}
    </FormControl>
  )
}

export default SelectField
