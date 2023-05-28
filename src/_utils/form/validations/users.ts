import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesUser = {
  nome: "",
  cpf: "",
  siape: "",
  dataNascimento: "",
  tipoPerfil: "",
  telefone: "",
  label_setor: null,
  email: ""
};

export const validateUser = validateFormValues(
  yup.object({
    nome: yup.string().required(messageValidations.required),
    cpf: yup.string().required(messageValidations.required),
    siape: yup.string().required(messageValidations.required),
    dataNascimento: yup.string().required(messageValidations.required),
    tipoPerfil: yup.string().required(messageValidations.required),
    telefone: yup.string().required(messageValidations.required),
    label_setor: yup
      .number()
      .required(messageValidations.required)
      .typeError(messageValidations.number),
    email: yup
      .string()
      .email(messageValidations.email)
      .required(messageValidations.required)
  })
);
