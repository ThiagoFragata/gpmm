import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesRequestTransport = {
  finalidade: "",
  dataInicio: "",
  dataFinal: "",
  saida: "",
  destino: ""
};

export const validateCreateRequestTransport = validateFormValues(
  yup.object({
    idMotorista: yup
      .number()
      .required(messageValidations.required)
      .typeError(messageValidations.number),
    idTransporte: yup
      .number()
      .required(messageValidations.required)
      .typeError(messageValidations.number),
    finalidade: yup.string().required(messageValidations.required),
    dataInicio: yup.string().required(messageValidations.required),
    dataFinal: yup.string().required(messageValidations.required),
    saida: yup.string().required(messageValidations.required),
    destino: yup.string().required(messageValidations.required)
  })
);
