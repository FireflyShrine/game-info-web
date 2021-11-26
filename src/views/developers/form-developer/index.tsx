import React, { useRef, useState } from "react";
import {
  DrawerBody,
  DrawerFooter,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import InputField from "../../../components/Forms/InputField";
import { warnValidation } from "../../../components/helpers/warnValidation";
import { useFetch } from "../../../hooks/useFetch";
import SubmitButton from "../../../components/Forms/submit-button";

import { schema } from "./developer.schema";
import {
  IDeveloper,
  createDeveloper,
  updateDeveloper,
} from "../../../api/developers";

interface Props {
  idDeveloper?: number;
  isOpen: boolean;
  onClose: () => void;
}

const DrawerFormDeveloper = ({ idDeveloper, isOpen, onClose }: Props) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (developer: any) => {
    try {
      setLoading(true);
      await schema.validate(developer, {
        abortEarly: false,
      });
      if (idDeveloper) {
        await updateDeveloper(idDeveloper, developer);
        console.log(developer);
      } else {
        await createDeveloper(developer);
        console.log(developer);
      }
      onClose();
    } catch (err) {
      warnValidation(err, formRef.current);
    } finally {
      setLoading(false);
    }
  };

  const { response: developer, isLoading: loadingDeveloper } =
    useFetch<IDeveloper>(
      idDeveloper
        ? `http://localhost:8080/desenvolvedoras"/${idDeveloper}`
        : undefined
    );

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {!idDeveloper && "Adicionar desenvolvedora"}
          {!!idDeveloper && "Atualizar desenvolvedora"}
        </DrawerHeader>

        <DrawerBody>
          <Form
            id="form-developer"
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={developer}
          >
            <InputField
              name="nome"
              label="Nome da desenvolvedora"
              marginBottom={2}
              placeholder={
                !!idDeveloper && loadingDeveloper ? "Buscando nome..." : ""
              }
            />
          </Form>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>

          <SubmitButton
            form="form-developer"
            isDisabled={!!idDeveloper && loadingDeveloper}
            loadingText="Salvando"
          >
            {!!idDeveloper && "Atualizar"}
            {!idDeveloper && "Adicionar"}
          </SubmitButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFormDeveloper;
