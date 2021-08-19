import { Container, Title } from "./styles";

function Login() {
  return (
    <Container>
      <Title>Faça Login</Title>
      <form>
        <label>Email:</label>
        <input type="text" placeholder="exemple@gmail.com" />
        <label>Senha:</label>
        <input type="password" placeholder="*********" />
        <button>Logar</button>
      </form>
    </Container>
  );
}

export default Login;
