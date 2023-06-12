import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesDrive = {
  nome: "",
  numeroCnh: ""
};

export const validateCreateDrive = validateFormValues(
  yup.object({
    nome: yup.string().required(messageValidations.required),
    numeroCnh: yup.string().required(messageValidations.required)
  })
);

export const validateEditDrive = validateCreateDrive;
