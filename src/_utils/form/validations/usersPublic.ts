import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";
import { checkValidDate } from "@/_utils/masks";

export const initialValuesUsersPublic = {
  nome: "",
  cpf: "",
  siape: "",
  dataNascimento: "",
  telefone: "",
  email: "",
  senha: "",
  accept__term: false
};

export const validateUsersPublic = validateFormValues(
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
    label_setor: yup
      .string()
      .required(messageValidations.required)
      .typeError(messageValidations.number),
    email: yup
      .string()
      .email(messageValidations.email)
      .required(messageValidations.required),
    senha: yup
      .string()
      .min(8, messageValidations.minSize({ name: "A senha", size: 8 }))
      .max(50, messageValidations.maxSize({ name: "A senha", size: 50 }))
      .required(messageValidations.required),
    confirmaSenha: yup
      .string()
      .oneOf([yup.ref("senha")], messageValidations.confirmPassword)
  })
);
