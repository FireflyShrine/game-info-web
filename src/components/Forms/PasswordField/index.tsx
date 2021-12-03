import React, { useEffect, useRef } from "react";
import {
  FormControl,
  FormLabel,
  InputProps,
  Text,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import { useField } from "@unform/core";
import { FaEyeSlash, FaEye } from "react-icons/fa";

interface Props extends InputProps {
  name: string;
  label?: string;
}

const PasswordField = ({ name, label, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },

      setValue: (ref, value) => {
        ref.current.value = value;
      },

      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <FormControl>
      {label && <FormLabel htmlFor={fieldName}>{label}</FormLabel>}
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          ref={inputRef}
          defaultValue={defaultValue}
          isInvalid={!!error}
          errorBorderColor="red.300"
          {...rest}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            backgroundColor="transparent"
            size="sm"
            onClick={handleClick}
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && <Text color="red.300">{error}</Text>}
    </FormControl>
  );
};

export default PasswordField;
