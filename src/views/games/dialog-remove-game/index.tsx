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
import { deleteGame, IGames } from "../../../api/games";
import { useFetch } from "../../../hooks/useFetch";

type DialogRemoverGameProps = {
  idGame?: number;
  isOpen: boolean;
  onClose: () => void;
};

const DialogRemoverGame = ({
  idGame,
  isOpen,
  onClose,
}: DialogRemoverGameProps) => {
  const [loading, setLoading] = useState(false);
  const cancelRef = React.useRef<any>();

  const { response: game, isLoading: loadingGame } = useFetch<IGames>(
    idGame ? `http://localhost:8080/jogos/${idGame}` : undefined
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
            Deletar <b>{game?.nome}?</b>
          </AlertDialogHeader>

          <AlertDialogBody>
            Tem certeza que deseja excluir este jogo? Essa ação não poderá ser
            desfeita.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Não, voltar
            </Button>
            <Button
              colorScheme="red"
              onClick={async () => {
                if (idGame) {
                  setLoading(true);
                  await deleteGame(idGame);
                  onClose();
                  setLoading(false);
                }
              }}
              isLoading={loading || loadingGame}
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

export default DialogRemoverGame;
