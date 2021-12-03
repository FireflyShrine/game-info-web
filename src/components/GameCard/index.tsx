import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { format } from "date-fns";
import { IGames } from "../../api/games";

type Props = {
  game: IGames;
};

function GameCard({ game }: Props) {
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
        <Heading fontSize={20}>{game.nome}</Heading>
        <Text fontSize={14} mt={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor
          esse eligendi, asperiores sequi molestias.
        </Text>
        <Box mt={3}>
          <Text fontSize={14}>
            Lançamento: {game?.data && format(new Date(game.data), "dd/M/yyyy")}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default GameCard;
