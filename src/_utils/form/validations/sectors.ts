import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesSector = {
  nome: "",
  set_item: false
};

export const validateSector = validateFormValues(
  yup.object({
    nome: yup.string().required(messageValidations.required)
  })
);
