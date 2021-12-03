import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { AiOutlineArrowRight } from "react-icons/ai";
import ThemeToggleButton from "../../components/ThemeToggleButton";
import Head from "next/head";
import { useRouter } from "next/router";

function Documentation() {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Documentacão - Game Info</title>
      </Head>
      <Box>
        <HStack borderBottomWidth={1} p={3} justifyContent="space-between">
          <Heading color="orange">Game Info</Heading>

          <Button
            colorScheme="blue"
            onClick={() => {
              router.push("/");
            }}
          >
            <Text mr={2}>Jogos</Text>{" "}
          </Button>
          <HStack>
            <Button
              colorScheme="orange"
              mr={5}
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
            <ThemeToggleButton
              checked={colorMode !== "light"}
              toggle={toggleColorMode}
            />
          </HStack>
        </HStack>
        <VStack width="100%" display="flex" p={10}>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">Base URL: http://localhost:8080</Text>
          </Box>
          <Text alignSelf="flex-start" pt={5}>
            Listagem de jogos
          </Text>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">GET /jogos</Text>
          </Box>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">GET /jogos/id</Text>
          </Box>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">GET /jogos?nome=FIFA12</Text>
          </Box>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">
              GET /jogos?nome=FIFA12&desenvolvedoras=Microsoft
            </Text>
          </Box>
          <Text alignSelf="flex-start" pt={5}>
            Listagem de desenvolvedoras
          </Text>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">GET /desenvolvedoras</Text>
          </Box>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">GET /desenvolvedoras/id</Text>
          </Box>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">
              GET /desenvolvedoras?nome=Rockstar Games
            </Text>
          </Box>
          <Text alignSelf="flex-start" pt={5}>
            Listagem de plataformas
          </Text>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">GET /plataformas</Text>
          </Box>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">GET /plataformas/id</Text>
          </Box>
          <Box
            width="100%"
            backgroundColor="gray"
            border="1px solid gray"
            p={5}
            borderRadius={6}
          >
            <Text fontWeight="bold">GET /plataformas?nome=Playstation 4</Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default Documentation;
