import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesTransport = {
  descricao: "",
  placa: "",
  totalDeAssentos: undefined
};

export const validateCreateTransport = validateFormValues(
  yup.object({
    descricao: yup.string().required(messageValidations.required),
    placa: yup.string().required(messageValidations.required),
    totalDeAssentos: yup
      .number()
      .typeError(messageValidations.number)
      .required(messageValidations.required)
  })
);

export const validateEditTransport = validateCreateTransport;
