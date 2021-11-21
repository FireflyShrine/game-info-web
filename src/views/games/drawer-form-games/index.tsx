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
  Text,
} from "@chakra-ui/react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import InputField from "../../../components/Forms/InputField";
import { warnValidation } from "../../../components/helpers/warnValidation";
import { useFetch } from "../../../hooks/useFetch";
import SubmitButton from "../../../components/Forms/submit-button";
import { createGame, IGames, updateGame } from "../../../api/games";
import { schema } from "./game.schema";

interface Props {
  idGame?: number;
  isOpen: boolean;
  onClose: () => void;
}
const DrawerFormGame = ({ idGame, isOpen, onClose }: Props) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (game: any) => {
    try {
      setLoading(true);
      await schema.validate(game, {
        abortEarly: false,
      });

      if (idGame) {
        await updateGame(idGame, game);
      } else {
        await createGame(game);
      }
      onClose();
    } catch (err) {
      warnValidation(err, formRef.current);
    } finally {
      setLoading(false);
    }
  };

  const { response: perfil, isLoading: loadingPerfil } = useFetch<IGames>(
    idGame ? `/games/${idGame}` : undefined
  );

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {!idGame && "Adicionar jogo"}
          {!!idGame && "Atualizar jogo"}
        </DrawerHeader>

        <DrawerBody>
          <Form
            id="form-game"
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={perfil}
          >
            {!!idGame && loadingPerfil && (
              <Text fontSize="xs">Buscando informações do jogo...</Text>
            )}
            <InputField name="jogo" label="Jogo" marginBottom={2} />
          </Form>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>

          <SubmitButton
            form="form-game"
            isRequesting={loading || (!!idGame && loadingPerfil)}
          >
            {!!idGame && "Salvar"}
            {!idGame && "Adicionar"}
          </SubmitButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFormGame;
