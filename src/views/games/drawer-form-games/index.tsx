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
  useToast,
} from "@chakra-ui/react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import InputField from "../../../components/Forms/InputField";
import { warnValidation } from "../../../components/helpers/warnValidation";
import { useFetch } from "../../../hooks/useFetch";
import { createGame, IGames, updateGame } from "../../../api/games";
import { schema } from "./game.schema";
import InputFile from "../../../components/Forms/InputFile";
import axios from "axios";
import { options } from "./content";
import MultiSelect from "../../../components/Forms/SelectField/multi-select";
import SelectField from "../../../components/Forms/SelectField";
import { IDeveloper } from "../../../api/developers";

interface Props {
  idGame?: number;
  isOpen: boolean;
  onClose: () => void;
}

const DrawerFormGame = ({ idGame, isOpen, onClose }: Props) => {
  const [loading, setLoading] = useState(false);
  const [platforms, setPlatforms] = useState<any>();

  const formRef = useRef<FormHandles>(null);

  const toast = useToast();

  const handleChange = (e?: any) => {
    setPlatforms(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const handleSubmit = async (game: any) => {
    try {
      setLoading(true);
      await schema.validate(game, {
        abortEarly: false,
      });
      if (idGame) {
        const formData = new FormData();
        formData.append("file", game.image);
        const response = await axios.post("api/upload", formData);
        game.image = response.data.url;
        await updateGame(idGame, game);
        toast({
          description: "Jogo alterado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        const formData = new FormData();
        formData.append("file", game.image);
        const response = await axios.post("api/upload", formData);
        game.image = response.data.url;
        await createGame(game);
        toast({
          description: "Jogo cadastrado com sucesso",
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

  const { response: game, isLoading: loadingGame } = useFetch<IGames>(
    idGame ? `http://localhost:8080/jogos/${idGame}` : undefined
  );

  const { response: desenvolvedoras, isLoading: loadingDesenvolvedoras } =
    useFetch<IDeveloper[]>(`http://localhost:8080/desenvolvedoras`);

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
            <InputField
              name="data"
              label="Data de Lançamento"
              type="date"
              marginBottom={2}
            />
            <SelectField
              name="desenvolvedora"
              label="Pesenvolvedora"
              marginBottom={2}
            >
              <option value="">Selecione...</option>
              {desenvolvedoras &&
                desenvolvedoras?.map((desenvolvedora) => (
                  <option
                    key={`select-desenvolvedora-${desenvolvedora.id}`}
                    value={desenvolvedora.nome}
                  >
                    {desenvolvedora.nome}
                  </option>
                ))}
            </SelectField>
            <MultiSelect
              isMulti
              name="plataforma"
              label="Plataforma"
              options={options}
              onChange={handleChange}
            />
            <InputFile name="image" />
          </Form>
        </DrawerBody>

        <DrawerFooter>
          <Button mr={3} onClick={onClose}>
            Cancelar
          </Button>

          <Button
            type="submit"
            form="form-game"
            isDisabled={!!idGame && loadingGame}
            isLoading={loading}
            loadingText="Salvando"
            colorScheme="orange"
          >
            {!!idGame && "Atualizar"}
            {!idGame && "Adicionar"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFormGame;
