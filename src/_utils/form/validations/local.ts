import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesLocal = {
  descricao: "",
  identificacao: "",
  totalDeAssento: undefined
};

export const validateCreateLocal = validateFormValues(
  yup.object({
    descricao: yup.string().required(messageValidations.required),
    identificacao: yup.string().required(messageValidations.required),
    totalDeAssento: yup
      .number()
      .typeError(messageValidations.number)
      .required(messageValidations.required)
  })
);

export const validateEditLocal = validateFormValues(
  yup.object({
    descricao: yup.string().required(messageValidations.required),
    identificacao: yup.string().required(messageValidations.required),
    totalDeAssento: yup
      .number()
      .typeError(messageValidations.number)
      .required(messageValidations.required)
  })
);
