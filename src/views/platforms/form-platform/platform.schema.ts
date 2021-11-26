import * as Yup from "yup";

export const schema = Yup.object().shape({
  nome: Yup.string()
    .required("Campo de nome é obrigatório")
    .min(3, "O nome deve conter no mínimo, 3 caracteres.")
    .max(100, "O nome deve conter no máximo, 100 caracteres."),
});
