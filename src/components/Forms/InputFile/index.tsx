import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react'
import Image from 'next/image'
import { useField } from '@unform/core'
import { Input, InputProps } from '@chakra-ui/input'
import { Box, Flex } from '@chakra-ui/layout'

interface Props extends InputProps {
  name: string
}

export default function InputFile({ name, ...rest }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  const [preview, setPreview] = useState(defaultValue)

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setPreview(null)
    }
    const previewURL = URL.createObjectURL(file)
    setPreview(previewURL)
  }, [])
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = ''
        setPreview(null)
      },
      setValue(ref: HTMLInputElement, value: any) {
        if (value instanceof Blob) {
          setPreview(URL.createObjectURL(value))
        } else {
          setPreview(value)
        }
        // setPreview(value);
      },
    })
  }, [fieldName, registerField])
  return (
    <Box marginTop={3}>
      <Flex
        as="label"
        htmlFor="image"
        border="2px solid #858585"
        flex={1}
        height="40px"
        borderRadius={5}
        justifyContent="center"
        alignItems="center"
      >
        Clique para enviar sua foto
      </Flex>
      {preview && (
        <Image
          src={preview}
          alt="Preview"
          width="200px"
        />
      )}
      <Input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        id="image"
        onChange={handlePreview}
        {...rest}
      />
    </Box>
  )
}
