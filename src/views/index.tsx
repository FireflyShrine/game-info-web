import React from 'react';
import {Container , Cabecalho , Corpo , Rodape , Botao, Title, Login, Input, Frase , Box , Paragrafo } from './style'
import { FiArrowRight } from 'react-icons/fi';
function Home() {
  return (
    <Container>
     <Cabecalho>
       <Title>Game Info</Title>
       <Input type="text" placeholder="Search"/>
       <Login href="">Log In</Login>
     </Cabecalho>
      <Corpo>
        <Box>
          <Frase>
            Seach for a game. Get details.
          </Frase>
        </Box>

        <Botao>
         <p>Read docs</p>
        <FiArrowRight size={40}/>
        </Botao>
      </Corpo>
      <Rodape>
        <Paragrafo>
          
          Game Info © - 2021. Alguns direitos reservados

        </Paragrafo>
      </Rodape>
    </Container>
  );
}

export default Home;
