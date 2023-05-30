import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesUser = {
  nome: "",
  cpf: "",
  siape: "",
  dataNascimento: "",
  // tipoPerfil: "",
  telefone: "",
  label_setor: null,
  email: ""
};

function checkValidDate(value: string): boolean {
  const jack = value.split("/");
  const day = parseInt(jack[0], 10);
  const month = parseInt(jack[1], 10);
  const year = parseInt(jack[2], 10);
  const date = new Date(year, month - 1, day);
  const dayValidate = date.getDate() === day;
  const monthValidate = date.getMonth() === month - 1;
  const yearValidate = date.getFullYear() === year;
  const isValidDate = dayValidate && monthValidate && yearValidate;
  return isValidDate;
}

export const validateUser = validateFormValues(
  yup.object({
    nome: yup.string().required(messageValidations.required),
    cpf: yup.string().required(messageValidations.required),
    siape: yup.string().required(messageValidations.required),
    dataNascimento: yup
      .string()
      .required(messageValidations.required)
      .test("dataNascimento", messageValidations.date, value =>
        checkValidDate(value)
      ),
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
