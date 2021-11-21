import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { IGames } from "../../../api/games";

type RemoveDialogGameProps = {
  game: IGames;
  onEditClick: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
};

function GameCardAuth({ game, onEditClick, onDeleteClick}: RemoveDialogGameProps) {
  return (
    <Box
      width="250px"
      boxShadow="md"
      rounded="xl"
      bg="success"
      borderWidth={0.1}
      borderColor="#4d5eaa44"
    >
      <Image
        src="https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/pZ2pIEEnH7YhEtpxh1CY6KDz.png"
        alt="Segun Adebayo"
        boxSize="250"
        objectFit="cover"
        roundedTop="md"
      />
      <Box p={3}>
        <Heading fontSize={20}>{game.nome}</Heading>
        <Text fontSize={14} mt={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor
          esse eligendi, asperiores sequi molestias.
        </Text>
        <Box mt={3}>
          <Text fontSize={14}>Ano de lançamento: 2014</Text>
          <Text fontSize={14}>Plataforma: PS4</Text>
        </Box>
        <HStack justifyContent="flex-end">
          <Tooltip hasArrow label="Editar game" placement="top">
            <IconButton
              colorScheme="whatsapp"
              aria-label="Edição de game"
              margin={1}
              icon={<HiPencilAlt />}
              onClick={onEditClick}
            />
          </Tooltip>
          <Tooltip hasArrow label="Remover game" placement="top">
            <IconButton
              colorScheme="red"
              margin={1}
              aria-label="Apagar game"
              icon={<HiTrash />}
              onClick={onDeleteClick}
            />
          </Tooltip>
        </HStack>
      </Box>
    </Box>
  );
}

export default GameCardAuth;
