import React from "react";
import { FiArrowRight } from "react-icons/fi";

import * as S from "./style";
function Home() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Game Info</S.Title>
        <S.Input type="text" placeholder="Search" />
        <S.Login href="">Log In</S.Login>
      </S.Header>
      <S.Corpo>
        <S.Box>
          <S.Frase>Seach for a game. Get details.</S.Frase>
        </S.Box>

        <S.Botao>
          <p>Read docs</p>
          <FiArrowRight size={40} />
        </S.Botao>
      </S.Corpo>
      <S.Rodape>
        <S.Paragrafo>Game Info © - 2021. Alguns direitos reservados</S.Paragrafo>
      </S.Rodape>
    </S.Container>
  );
}

export default Home;
