import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10%;
  padding: 0px 16px;
  border-bottom: 1px solid #9b9fa3;
`;

export const Title = styled.h1`
  font-size: 16px;
`;

export const Input = styled.input`
  width: 400px;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 0.5px solid gray;
`;

export const Login = styled.a`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`;

export const Corpo = styled.div`
  height: 80%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 600px;
  text-align: center;
`;

export const Frase = styled.h1`
  font-size: 60px;
`;

export const Botao = styled.button`
  height: 80px;
  width: 370px;
  border: none;
  border-radius: 10px;
  background: #464d55;
  font-size: 30px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #676c75;
  }

  > p {
    margin-right: 20px;
  }
`;
export const Rodape = styled.footer`
  width: 100%;
  padding: 10px 0;
  bottom: 0;
  left: 0;
  position: absolute;

  display: flex;
  justify-content: center;
`;

export const Paragrafo = styled.p`
  font-size: 22px;
`;
