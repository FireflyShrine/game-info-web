import { useState } from "react";
import {
  Heading,
  HStack,
  IconButton,
  Tooltip,
  Grid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { HiPlus } from "react-icons/hi";

import { useBreadcrumb } from "../../contexts/BreadcrumbProvider";
import { useFetch } from "../../hooks/useFetch";
import Layout from "../../layout";
import CardPlatform from "./card-platform";
import DrawerFormPlatform from "./form-platform";
import DialogRemoverPlatform from "./dialog-remove-platform";
import { IPlatform } from "../../api/platforms";

function Platform() {
  const [idPlatform, setIdPlatform] = useState<number | null>(null);

  const { changeBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    changeBreadcrumbs([
      { title: "Início", href: "/" },
      { title: "Plataforma" },
    ]);
  }, []);

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

  const { response, isLoading, reload } = useFetch<IPlatform[]>(
    `http://localhost:8080/plataformas`
  );

  return (
    <Layout pageTitle="Plataformas - Game Info">
      <HStack justifyContent="space-between" marginBottom={2}>
        <Heading size="lg" marginBottom={2}>
          Plataforma
        </Heading>

        <Tooltip hasArrow label="Adicionar plataforma" placement="auto">
          <IconButton
            colorScheme="blue"
            aria-label="Adição de plataforma"
            margin={1}
            icon={<HiPlus />}
            onClick={onOpenDrawer}
          />
        </Tooltip>
      </HStack>
      {isLoading && <Text>Carregando plataformas...</Text>}
      <Grid
        mt={10}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={5}
      >
        {response?.map((x) => (
          <CardPlatform
            platform={x}
            key={`platform-${x.id}`}
            onEditClick={() => {
              setIdPlatform(x.id);
              onOpenDrawer();
            }}
            onDeleteClick={() => {
              setIdPlatform(x.id);
              onDialogOpen();
            }}
          />
        ))}
      </Grid>

      <DrawerFormPlatform
        idPlatform={idPlatform ?? 0}
        isOpen={isOpenDrawer}
        onClose={() => {
          setIdPlatform(null);
          onCloseDrawer();
          reload();
        }}
      />

      <DialogRemoverPlatform
        idPlatform={idPlatform ?? 0}
        isOpen={isDialogOpen}
        onClose={() => {
          setIdPlatform(null);
          onDialogClose();
          reload();
        }}
      />
    </Layout>
  );
}

export default Platform;
