import * as Yup from "yup";

export const schema = Yup.object().shape({
  nome: Yup.string()
    .required("Por favor, informe o nome do jogo.")
    .max(255, "O nome do jogo deve possuir no máximo, 255 caracteres;"),
  data: Yup.string().required("Por favor, informe a data de lançamento;"),
  desenvolvedora: Yup.string().typeError("Por favor, infome a desenvolvedora."),
  // plataforma: Yup.string().typeError("Por favor, infome a(s) plataforma(s);"),
});
