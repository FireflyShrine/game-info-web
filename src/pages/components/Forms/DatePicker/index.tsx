import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useField } from '@unform/core'
import React, { useEffect, useRef, useState } from 'react'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { HiCalendar } from 'react-icons/hi'

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string
  label?: string
}

const CustomInput = ({ value, onClick, ...rest }: any) => {
  const bgColor = useColorModeValue('white', 'gray.900')
  return (
    <InputGroup w="100%">
      <Input value={value} bg={bgColor} onClick={onClick} {...rest} />
      <InputRightElement>
        <HiCalendar />
      </InputRightElement>
    </InputGroup>
  )
}

const DatePickerField = ({ name, label, ...rest }: Props) => {
  const datepickerRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)
  console.log('DEFAULT VALUE => ', defaultValue)
  const [date, setDate] = useState<Date | null>(defaultValue || null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      clearValue: (ref: any) => {
        ref.clear()
        setDate(null)
      },
      setValue: (ref, value) => {
        setDate(value)
      },
      getValue: () => {
        return date
      },
    })
  }, [fieldName, registerField, date])

  useEffect(() => {
    if (typeof defaultValue === 'string') {
      setDate(new Date(defaultValue))
    } else {
      setDate(defaultValue)
    }
  }, [defaultValue])

  return (
    <FormControl>
      {label && <FormLabel htmlFor={fieldName}>{label}</FormLabel>}
      <Stack w="100%">
        <ReactDatePicker
          ref={datepickerRef}
          disabled={rest.disabled}
          selected={date}
          placeholderText="00/00/0000"
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setDate(date as Date)}
          customInput={<CustomInput value={date} onChange={setDate} />}
          {...rest}
        />
      </Stack>

      {error && <Text color="red.300">{error}</Text>}
    </FormControl>
  )
}

export default DatePickerField
