import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
import { AiOutlineArrowRight } from "react-icons/ai";
import ThemeToggleButton from "../../components/ThemeToggleButton";
import Head from "next/head";

function Documentation() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Documentacão - Game Info</title>
      </Head>
      <Box>
        <HStack borderBottomWidth={1} p={3} justifyContent="space-between">
          <Heading color="blue.400">Game Info</Heading>

          <Button colorScheme="blue">
            <Text mr={2}>Documentação</Text>{" "}
            <AiOutlineArrowRight size={20} style={{ marginTop: 4 }} />
          </Button>
          <HStack>
            <Button colorScheme="whatsapp" mr={5}>
              Login
            </Button>
            <ThemeToggleButton
              checked={colorMode !== "light"}
              toggle={toggleColorMode}
            />
          </HStack>
        </HStack>
        <Box width="100%" display="flex" justifyContent="center" mt={10}></Box>
      </Box>
    </>
  );
}

export default Documentation;
