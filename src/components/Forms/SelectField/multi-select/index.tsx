import React, { useRef, useEffect } from "react";
import Select, { Props } from "react-select";
import { useField } from "@unform/core";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Text } from "@chakra-ui/layout";

interface MultiSelectProps extends Props {
  name: string;
  label?: string;
}

const MultiSelect = ({ name, label, ...rest }: MultiSelectProps) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.select?.state.value) {
            return [];
          }
          return ref.select.state.value.map((option: any) => option.value);
        }
        if (!ref.select.state.value) {
          return "";
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <FormControl>
      {label && <FormLabel htmlFor={fieldName}>{label}</FormLabel>}

      <Select
        name={fieldName}
        defaultValue={defaultValue}
        ref={selectRef}
        {...rest}
      />

      {error && (
        <Text fontSize="xs" color="red.300">
          {error}
        </Text>
      )}
    </FormControl>
  );
};
export default MultiSelect;
