import { useState, useEffect } from "react";
import {
  Grid,
  Heading,
  HStack,
  IconButton,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";

import Layout from "../../layout";
import DrawerFormGame from "./drawer-form-games";
import GameCardAuth from "./game-card-auth";
import { IGames } from "../../api/games";
import { useBreadcrumb } from "../../contexts/BreadcrumbProvider";
import { useFetch } from "../../hooks/useFetch";
import DialogRemoverGame from "./dialog-remove-game";
import LoadingCards from "../../components/helpers/loading-cards";

const Games = () => {
  const [idGame, setIdGame] = useState<number | null>(null);
  const { changeBreadcrumbs } = useBreadcrumb();

  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  const {
    isOpen: isDialogOpen,
    onOpen: onDialogOpen,
    onClose: onDialogClose,
  } = useDisclosure();

  const { response, isLoading, reload } = useFetch<IGames[]>(
    `http://localhost:8080/jogos`
  );

  useEffect(() => {
    changeBreadcrumbs([{ title: "Jogos", href: "/games" }]);
  }, []);

  return (
    <Layout pageTitle="Jogos - Game Info">
      <HStack
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        <Heading size="lg" marginBottom={2}>
          Jogos
        </Heading>
        <Tooltip hasArrow label="Adicionar jogo" placement="auto">
          <IconButton
            colorScheme="orange"
            aria-label="Adição de jogo"
            margin={1}
            icon={<HiPlus />}
            onClick={onOpenDrawer}
          />
        </Tooltip>
      </HStack>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={5}
        marginTop={5}
      >
        <LoadingCards isLoading={isLoading} height="80px" />
        {response?.map((game) => (
          <GameCardAuth
            key={`jogo-${game.id}`}
            game={game}
            onEditClick={() => {
              setIdGame(game.id);
              onOpenDrawer();
            }}
            onDeleteClick={() => {
              setIdGame(game.id);
              onDialogOpen();
            }}
          />
        ))}
      </Grid>

      <DrawerFormGame
        idGame={idGame ?? 0}
        isOpen={isOpenDrawer}
        onClose={() => {
          setIdGame(null);
          onCloseDrawer();
          reload();
        }}
      />

      <DialogRemoverGame
        idGame={idGame ?? 0}
        isOpen={isDialogOpen}
        onClose={() => {
          setIdGame(null);
          onDialogClose();
          reload();
        }}
      />
    </Layout>
  );
};

export default Games;
