import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { format } from "date-fns";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { IGames } from "../../../api/games";

type GameCardProps = {
  game: IGames;
  onEditClick: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
};

function GameCardAuth({ game, onEditClick, onDeleteClick }: GameCardProps) {
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
        src={game.image}
        alt="Segun Adebayo"
        boxSize="250"
        objectFit="cover"
        roundedTop="md"
      />
      <Box p={3}>
        <Heading fontSize={20} mb={1}>
          {game.nome}
        </Heading>

        <Box mt={3}>
          <Text>
            <strong>Desenvolvedora:</strong> {game?.desenvolvedora}
          </Text>
          <Text>
            <strong> Lançamento:</strong>{" "}
            {game.data && format(new Date(game.data), "dd/M/yyyy")}
          </Text>
          <strong> Plataformas:</strong>
          <HStack>
            {game.plataforma?.map((x) => (
              <Text
                backgroundColor="blue.300"
                borderRadius="5px"
                padding="1px 5px"
                fontSize={12}
                key={`plataforma-${x}`}
              >
                {x}
              </Text>
            ))}
          </HStack>
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
