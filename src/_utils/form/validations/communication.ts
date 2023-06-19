import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesCommunication = {
  assunto: "",
  mensagem: ""
};

export const validateCreateCommunication = validateFormValues(
  yup.object({
    assunto: yup.string().required(messageValidations.required),
    mensagem: yup.string().required(messageValidations.required)
  })
);
