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

type ModalLoginProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
  const cancelRef = useRef<any>();

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Realizar login
          </AlertDialogHeader>
          <AlertDialogBody>
            Essa funcionalidade é apenas para os administradores do site.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Não, voltar
            </Button>
            <Button colorScheme="red" onClick={async () => {}} ml={3}>
              Sim, apagar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
