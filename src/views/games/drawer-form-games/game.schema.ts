import * as Yup from "yup";

export const schema = Yup.object().shape({
  nome: Yup.string()
    .required("Por favor, informe o nome do convênio.")
    .max(100, "O nome do convênio deve possuir no máximo, 100 caracteres"),
});
