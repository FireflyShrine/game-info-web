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
  useToast,
} from "@chakra-ui/react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import InputField from "../../../components/Forms/InputField";
import { warnValidation } from "../../../components/helpers/warnValidation";
import { useFetch } from "../../../hooks/useFetch";

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

  const toast = useToast();

  const handleSubmit = async (developer: any) => {
    try {
      setLoading(true);
      await schema.validate(developer, {
        abortEarly: false,
      });
      if (idDeveloper) {
        await updateDeveloper(idDeveloper, developer);
        toast({
          description: "Desenvolvedora alterada com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        await createDeveloper(developer);
        toast({
          description: "Desenvolvedora cadastrar com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
      onClose();
    } catch (err) {
      warnValidation(err, formRef.current);
      toast({
        description: "Ocorreu um erro",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const { response: developer, isLoading: loadingDeveloper } =
    useFetch<IDeveloper>(
      idDeveloper
        ? `http://localhost:8080/desenvolvedoras/${idDeveloper}`
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
          <Button mr={3} onClick={onClose}>
            Cancelar
          </Button>

          <Button
            form="form-developer"
            type="submit"
            isDisabled={!!idDeveloper && loadingDeveloper}
            isLoading={loading}
            loadingText="Salvando"
            colorScheme="orange"
          >
            {!!idDeveloper && "Atualizar"}
            {!idDeveloper && "Adicionar"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFormDeveloper;
