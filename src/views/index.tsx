import React, { useRef } from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading, HStack, Text, Grid, VStack } from "@chakra-ui/layout";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import ThemeToggleButton from "../components/ThemeToggleButton";
import InputField from "../components/Forms/InputField";
import GameCard from "../components/GameCard";
import Head from "next/head";
import { useRouter } from "next/router";

const content = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Initial() {
  const formRef = useRef<FormHandles>(null);
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();

  function handleSubmit() {
    console.log("teste");
  }

  return (
    <>
      <Head>
        <title>Game Info</title>
      </Head>
      <Box>
        <HStack borderBottomWidth={1} p={3} justifyContent="space-between">
          <Heading color="blue.400">Game Info</Heading>

          {/* <Button colorScheme="blue">
            <Text mr={2}>Documentação</Text>{" "}
            <AiOutlineArrowRight size={20} style={{ marginTop: 4 }} />
          </Button> */}
          <HStack>
            <Button
              colorScheme="whatsapp"
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
        <Box width="100%" display="flex" justifyContent="center" mt={10}>
          <VStack maxWidth="1000px" justifyContent="center">
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ width: "100%", marginBottom: 15 }}
            >
              <InputField
                name="filtro"
                placeholder="Busque um jogo"
                width="100%"
              />
            </Form>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={5}
            >
              {content.map((x) => (
                <GameCard key={`cad-${x}`} />
              ))}
            </Grid>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default Initial;
