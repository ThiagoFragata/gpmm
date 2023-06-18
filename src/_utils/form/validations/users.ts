import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";
import { checkValidDate } from "@/_utils/masks";

export const initialValuesUser = {
  nome: "",
  cpf: "",
  siape: "",
  dataNascimento: "",
  telefone: "",
  auth__drive: false,
  email: ""
};

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

export const validateUserProfile = validateFormValues(
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
    telefone: yup
      .string()
      .required(messageValidations.required)
      .min(14, messageValidations.phone),
    email: yup
      .string()
      .email(messageValidations.email)
      .required(messageValidations.required)
  })
);
