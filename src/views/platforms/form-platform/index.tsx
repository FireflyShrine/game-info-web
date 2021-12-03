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
import { schema } from "./platform.schema";
import {
  updatePlatform,
  createPlatform,
  IPlatform,
} from "../../../api/platforms";

interface Props {
  idPlatform?: number;
  isOpen: boolean;
  onClose: () => void;
}

const DrawerFormPlatform = ({ idPlatform, isOpen, onClose }: Props) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const toast = useToast();

  const handleSubmit = async (platform: any) => {
    try {
      setLoading(true);
      await schema.validate(platform, {
        abortEarly: false,
      });
      if (idPlatform) {
        await updatePlatform(idPlatform, platform);
        toast({
          description: "Plataforma alterada com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        await createPlatform(platform);
        toast({
          description: "Plataforma cadastrar com sucesso",
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

  const { response: platform, isLoading: loadingPlatform } =
    useFetch<IPlatform>(
      idPlatform ? `http://localhost:8080/plataformas/${idPlatform}` : undefined
    );

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {!idPlatform && "Adicionar plataforma"}
          {!!idPlatform && "Atualizar plataforma"}
        </DrawerHeader>

        <DrawerBody>
          <Form
            id="form-platform"
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={platform}
          >
            <InputField
              name="nome"
              label="Nome da plataforma"
              marginBottom={2}
              placeholder={
                !!idPlatform && loadingPlatform ? "Buscando nome..." : ""
              }
            />
          </Form>
        </DrawerBody>

        <DrawerFooter>
          <Button mr={3} onClick={onClose}>
            Cancelar
          </Button>

          <Button
            type="submit"
            form="form-platform"
            isLoading={loading}
            isDisabled={!!idPlatform && loadingPlatform}
            loadingText="Salvando"
            colorScheme="orange"
          >
            {!!idPlatform && "Atualizar"}
            {!idPlatform && "Adicionar"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFormPlatform;
