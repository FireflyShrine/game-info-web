import { useState, useRef, useCallback } from "react";
import {
  Flex,
  Heading,
  Box,
  Grid,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import axios from "axios";

import { error } from "../../components/helpers/toasts";
import InputField from "../../components/Forms/InputField";
import useUser from "../../hooks/useUser";
import Head from "next/head";
import PasswordField from "../../components/Forms/PasswordField";

type Data = {
  email: string;
  password: string;
};

const Login = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const { mutateUser } = useUser({
    redirectTo: "/games",
    redirectIfFound: true,
  });

  const handleSubmit: SubmitHandler<Data> = useCallback(
    async (data) => {
      setLoading(true);

      try {
        await mutateUser(axios.post(`/api/login`, data));
      } catch (err) {
        console.error("An unexpected error happened:", err);

        error("Email e/ou senha inválidos.");
      } finally {
        setLoading(false);
      }
    },
    [mutateUser]
  );

  return (
    <>
      <Head>
        <title>Login - Game Info</title>
      </Head>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Grid templateColumns="repeat(2, 1fr)" height="100%" width="100%">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            background="#e08b44"
            p={5}
          >
            <Image width="300px" src="assets/joystick.png" />
          </Box>

          <Flex
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="column"
            background="brand.100"
            p={8}
          >
            <Heading mb={2} alignSelf="center">
              Faça Login
            </Heading>
            <Text mb={8} color="red.300">
              Funcionalidade para apenas administradores do site.
            </Text>
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              id="form-login"
              style={{ width: "100%" }}
            >
              <InputField name="email" label="Email:" borderColor="#A0AEC0" />
              <Box mt={5}>
                <PasswordField
                  name="password"
                  label="Senha:"
                  borderColor="#A0AEC0"
                />
              </Box>
              <Button
                mt={8}
                type="submit"
                width="100%"
                bg="#e08b44"
                form="form-login"
                isLoading={loading}
                _hover={{ bg: "#da935a" }}
              >
                Entrar
              </Button>
            </Form>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default Login;
