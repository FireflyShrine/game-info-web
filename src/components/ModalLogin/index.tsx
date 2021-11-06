import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import InputField from "../Forms/InputField";
import { Text } from "@chakra-ui/layout";

type ModalLoginProps = {
  isOpen: boolean;
  onClose: () => void;
};

type DataProps = {
  email: string;
  password: string;
};

export default function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
  const cancelRef = useRef<any>();
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: DataProps) {
    console.log(data);
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            <Text>Realizar login</Text>
            <Text fontWeight={10} color="#9e8989">
              Apenas administradores do site tem acesso a aunteticação.
            </Text>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <InputField name="email" label="Email" />
              <InputField name="password" label="Senha" />
            </Form>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Voltar
            </Button>
            <Button
              colorScheme="whatsapp"
              width={150}
              onClick={() => {
                formRef.current?.submitForm();
              }}
              ml={3}
            >
              Entrar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
