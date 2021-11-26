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
import InputFile from "../../../components/Forms/InputFile";
import axios from "axios";
import { useRouter } from "next/router";

interface Props {
  idGame?: number;
  isOpen: boolean;
  onClose: () => void;
}

const DrawerFormGame = ({ idGame, isOpen, onClose }: Props) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const router = useRouter();

  const handleSubmit = async (game: any) => {
    try {
      setLoading(true);
      await schema.validate(game, {
        abortEarly: false,
      });
      if (idGame) {
        const formData = new FormData();
        formData.append("file", game.imagem);
        const response = await axios.post("api/upload", formData);
        game.imagem = response.data.url;
        console.log(game);
        await updateGame(game, idGame);
      } else {
        const formData = new FormData();
        formData.append("file", game.imagem);
        const response = await axios.post("api/upload", formData);
        game.imagem = response.data.url;
        console.log(game);
        await createGame(game);
      }
      onClose();
    } catch (err) {
      warnValidation(err, formRef.current);
    } finally {
      setLoading(false);
    }
  };

  const { response: game, isLoading: loadingGame } = useFetch<IGames>(
    idGame ? `http://localhost:5432/jogos/${idGame}` : undefined
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
            initialData={game}
          >
            {!!idGame && loadingGame && (
              <Text fontSize="xs">Buscando informações do jogo...</Text>
            )}
            <InputField name="nome" label="Jogo" marginBottom={2} />
            <InputField name="data" label="Data de Lançamento" type="date" />
            <InputField name="plataforma" label="plataforma" />
            <InputFile name="image" />
          </Form>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>

          <SubmitButton
            form="form-game"
            isRequesting={loading || (!!idGame && loadingGame)}
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
