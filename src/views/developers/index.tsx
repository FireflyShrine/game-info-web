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
import DialogRemoverDeveloper from "./dialog-remove-developer";
import { IDeveloper } from "../../api/developers";
import DrawerFormDeveloper from "./form-developer";
import CardDeveloper from "./card-developer";

function Developer() {
  const [idDeveloper, setIdDeveloper] = useState<number | null>(null);

  const { changeBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    changeBreadcrumbs([
      { title: "Início", href: "/" },
      { title: "Desenvolvedoras" },
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

  const { response, isLoading, reload } = useFetch<IDeveloper[]>(
    `http://localhost:8080/desenvolvedoras`
  );

  return (
    <Layout pageTitle="Desenvolvedoras - Game Info">
      <HStack justifyContent="space-between" marginBottom={2}>
        <Heading size="lg" marginBottom={2}>
          Desenvolvedoras
        </Heading>

        <Tooltip hasArrow label="Adicionar desenvolvedoras" placement="auto">
          <IconButton
            colorScheme="orange"
            aria-label="Adição de desenvolvedoras"
            margin={1}
            icon={<HiPlus />}
            onClick={onOpenDrawer}
          />
        </Tooltip>
      </HStack>
      {isLoading && <Text>Carregando desenvolvedoras...</Text>}
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
          <CardDeveloper
            developer={x}
            key={`developer-${x.id}`}
            onEditClick={() => {
              setIdDeveloper(x.id);
              onOpenDrawer();
            }}
            onDeleteClick={() => {
              setIdDeveloper(x.id);
              onDialogOpen();
            }}
          />
        ))}
      </Grid>

      <DrawerFormDeveloper
        idDeveloper={idDeveloper ?? 0}
        isOpen={isOpenDrawer}
        onClose={() => {
          setIdDeveloper(null);
          onCloseDrawer();
          reload();
        }}
      />

      <DialogRemoverDeveloper
        idDeveloper={idDeveloper ?? 0}
        isOpen={isDialogOpen}
        onClose={() => {
          setIdDeveloper(null);
          onDialogClose();
          reload();
        }}
      />
    </Layout>
  );
}

export default Developer;
