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
import { deleteIDeveloper, IDeveloper } from "../../../api/developers";
import { useFetch } from "../../../hooks/useFetch";

type DialogRemoverDeveloperProps = {
  idDeveloper?: number;
  isOpen: boolean;
  onClose: () => void;
};

const DialogRemoverDeveloper = ({
  idDeveloper,
  isOpen,
  onClose,
}: DialogRemoverDeveloperProps) => {
  const [loading, setLoading] = useState(false);
  const cancelRef = React.useRef<any>();

  const { response: developer, isLoading: loadingDeveloper } =
    useFetch<IDeveloper>(
      idDeveloper
        ? `http://localhost:8080/plataformas/${idDeveloper}`
        : undefined
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
            Deletar desenvolvedora <b>{developer?.nome}</b>
          </AlertDialogHeader>

          <AlertDialogBody>
            Tem certeza que deseja excluir esta desenvolvedora? Essa ação não
            poderá ser desfeita.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Não, voltar
            </Button>
            <Button
              colorScheme="red"
              onClick={async () => {
                if (idDeveloper) {
                  setLoading(true);
                  await deleteIDeveloper(idDeveloper);
                  onClose();
                  setLoading(false);
                }
              }}
              isLoading={loading || loadingDeveloper}
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

export default DialogRemoverDeveloper;
