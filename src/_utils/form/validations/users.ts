import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesUser = {
  nome: "",
  cpf: "",
  siape: "",
  dataNascimento: "",
  telefone: "",
  auth__drive: false,
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
    cpf: yup
      .string()
      .required(messageValidations.required)
      .min(14, messageValidations.document),
    siape: yup
      .string()
      .required(messageValidations.required)
      .min(7, messageValidations.minSize({ name: "O campo", size: 7 })),
    dataNascimento: yup
      .string()
      .required(messageValidations.required)
      .min(10, messageValidations.date)
      .test("dataNascimento", messageValidations.date, value =>
        checkValidDate(value)
      ),
    tipoPerfil: yup.string().required(messageValidations.required),
    telefone: yup
      .string()
      .required(messageValidations.required)
      .min(14, messageValidations.phone),
    label_setor: yup
      .string()
      .required(messageValidations.required)
      .typeError(messageValidations.number),
    email: yup
      .string()
      .email(messageValidations.email)
      .required(messageValidations.required),
    auth__drive: yup.bool(),
    numeroCnh: yup.string().when("auth__drive", {
      is: true,
      then: schema => schema.required(messageValidations.required)
    })
  })
);

export const validateEditUser = validateUser;
