import {
  FormControl,
  FormLabel,
  Select,
  SelectProps,
  Text,
} from "@chakra-ui/react";
import { useField } from "@unform/core";
import { useEffect, useRef } from "react";
import { WithChildren } from "../../../../@types/with-children";

export interface CustomSelectProps extends SelectProps {
  name: string;
  label?: string;
  isLoading?: boolean;
}

const SelectField = ({
  name,
  label,
  isLoading,
  children,
  ...rest
}: WithChildren<CustomSelectProps>) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: (ref) => {
        return ref.current?.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <FormControl>
      {label && <FormLabel htmlFor={fieldName}>{label}</FormLabel>}

      <Select
        id={fieldName}
        ref={selectRef}
        isInvalid={!!error}
        defaultValue={defaultValue}
        placeholder={isLoading ? "Buscando dados..." : ""}
        isDisabled={isLoading}
        {...rest}
      >
        {children}
      </Select>

      {error && (
        <Text fontSize="xs" color="red.300">
          {error}
        </Text>
      )}
    </FormControl>
  );
};

export default SelectField;
