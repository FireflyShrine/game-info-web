import styled from "styled-components";

export const Container = styled.div` 
  height: 100vh;
  width: auto;
`;
export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding: 0px 50px 0px 50px;
  border-bottom: 1px solid gray;
`;
export const Title = styled.h1`
  font-size: 30px;
`;
export const Input = styled.input`
  height: 50px;
  width: 500px;
  font-size: 25px;
`;
export const Login = styled.a`
  font-size: 30px;
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


  > p { 
    margin-right: 20px;
   }  
`;
export const Rodape = styled.footer`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
export const Paragrafo = styled.p`
  font-size: 25px;
`; 

