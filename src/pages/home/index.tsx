import React, { useRef } from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Box,
  Heading,
  HStack,
  Text,
  Grid,
  Flex,
  VStack,
} from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import ThemeToggleButton from "../../components/ThemeToggleButton";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  function handleSubmit() {
    console.log("teste");
  }

  return (
    <Box>
      <HStack borderBottomWidth={1} p={3} justifyContent="space-between">
        <Heading color="blue.400">Game Info</Heading>

        <Button colorScheme="blue">
          <Text mr={2}>Documentação</Text>{" "}
          <AiOutlineArrowRight size={20} style={{ marginTop: 4 }} />
        </Button>
        <HStack>
          <Button colorScheme="danger" mr={5}>
            Sair
          </Button>
          <ThemeToggleButton
            checked={colorMode !== "light"}
            toggle={toggleColorMode}
          />
        </HStack>
      </HStack>
      <Box width="100%" display="flex" justifyContent="center" mt={10}>
        <VStack maxWidth="1000px" justifyContent="center">
          Home
        </VStack>
      </Box>
    </Box>
  );
}
