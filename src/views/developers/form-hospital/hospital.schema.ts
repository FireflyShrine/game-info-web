import * as Yup from 'yup'

export const schema = Yup.object().shape({
  cnpj: Yup.string().required('Campo CNPJ é obrigatorio').max(20),
  nome: Yup.string().required('Campo nome é obrigatorio').max(100),
  cnes: Yup.string().required('Campo CNES é obrigatorio'),
  cep: Yup.string().required('Campo CEP é obrigatorio'),
  estado: Yup.string().required('Campo estado é obrigatorio'),
  cidade: Yup.string().required('Campo cidade é obrigatorio'),
  logradouro: Yup.string().required('Campo logradouro é obrigatorio'),
})
