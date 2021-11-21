import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text } from "@chakra-ui/layout";

function GameCard() {
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
        <Heading fontSize={20}>Spider-Man</Heading>
        <Text fontSize={14} mt={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor
          esse eligendi, asperiores sequi molestias.
        </Text>
        <HStack mt={3}>
          <Text fontSize={14}>Plataforma: PS4</Text>
        </HStack>
      </Box>
    </Box>
  );
}

export default GameCard;
