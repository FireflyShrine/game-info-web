import { useEffect, useState, useRef, useCallback } from "react";
import { Flex, Heading, Box, useColorMode } from "@chakra-ui/react";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import axios from "axios";

import { error } from "../../components/helpers/toasts";
import InputField from "../../components/Forms/InputField";
import SubmitButton from "../../components/Forms/submit-button";
import useUser from "../../hooks/useUser";
import Head from "next/head";

type Data = {
  email: string;
  password: string;
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode("light");
  });

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
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Heading mb={8} alignSelf="center">
            Faça Login
          </Heading>
          <Form ref={formRef} onSubmit={handleSubmit} id="form-login">
            <InputField name="email" label="Email:" />
            <Box mt={5}>
              <InputField name="password" label="Senha:" type="password" />
            </Box>

            <SubmitButton
              mt={8}
              type="submit"
              width="100%"
              colorScheme="blue"
              form="form-login"
              isRequesting={loading}
              loadingText="Entrando..."
            >
              Entrar
            </SubmitButton>
          </Form>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
