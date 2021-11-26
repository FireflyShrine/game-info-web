import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { deletePlatform, IPlatform } from "../../../api/platforms";
import { useFetch } from "../../../hooks/useFetch";

type DialogRemoverPlatformProps = {
  idPlatform?: number;
  isOpen: boolean;
  onClose: () => void;
};

const DialogRemoverPlatform = ({
  idPlatform,
  isOpen,
  onClose,
}: DialogRemoverPlatformProps) => {
  const [loading, setLoading] = useState(false);
  const cancelRef = React.useRef<any>();

  const { response: platform, isLoading: loadingPlatform } =
    useFetch<IPlatform>(
      idPlatform ? `http://localhost:8080/plataformas/${idPlatform}` : undefined
    );

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Deletar Plataforma <b>{platform?.nome}</b>
          </AlertDialogHeader>

          <AlertDialogBody>
            Tem certeza que deseja excluir esta plataforma? Essa ação não poderá
            ser desfeita.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Não, voltar
            </Button>
            <Button
              colorScheme="red"
              onClick={async () => {
                if (idPlatform) {
                  setLoading(true);
                  await deletePlatform(idPlatform);
                  onClose();
                  setLoading(false);
                }
              }}
              isLoading={loading || loadingPlatform}
              ml={3}
            >
              Sim, apagar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DialogRemoverPlatform;
