import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
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
        <Box mt={3}>
          <Text>
            <strong>Desenvolvedora:</strong> {game?.desenvolvedora}
          </Text>
          <Text>
            <strong> Lançamento:</strong>{" "}
            {game?.data && format(new Date(game.data), "dd/M/yyyy")}
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
      </Box>
    </Box>
  );
}

export default GameCard;
