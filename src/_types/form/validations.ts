import * as yup from "yup";
import { validateFormValues } from "./validateForm";

const msgDefault = {
  required: "Este campo é obrigatório."
};

export const validateSearch = validateFormValues(
  yup.object({
    word: yup.string().required(msgDefault.required)
  })
);
