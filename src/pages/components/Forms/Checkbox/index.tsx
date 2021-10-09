import { Checkbox, CheckboxProps, FormControl, Text } from '@chakra-ui/react'
import { useField } from '@unform/core'
import React, { useEffect, useRef, useState } from 'react'

interface Props extends CheckboxProps {
  name: string
  label?: string
}

const CheckboxField = ({ name, label, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isChecked, setIsChecked] = useState(false)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return isChecked
      },
      setValue: (ref, value) => {
        setIsChecked(!!value)
      },
      clearValue: (ref) => {
        setIsChecked(!!defaultValue)
      },
    })
  }, [fieldName, registerField, defaultValue, isChecked])

  return (
    <FormControl marginBlock={3}>
      <Checkbox
        colorScheme="green"
        defaultIsChecked={!!defaultValue || !!rest.defaultChecked}
        ref={inputRef}
        defaultValue={defaultValue}
        isInvalid={!!error}
        errorBorderColor="red.300"
        id={fieldName}
        name={fieldName}
        isChecked={isChecked}
        onChange={(e) => setIsChecked(!!e.target.checked)}
      >
        {label}
      </Checkbox>

      {error && <Text color="red.300">{error}</Text>}
    </FormControl>
  )
}

export default CheckboxField
