import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";
import { checkValidDate, validFutureDate } from "@/_utils/masks";

export const initialValuesRequestTransport = {
  finalidade: "",
  saida: "",
  destino: ""
};

function setAmoutItensValidation(amount: number): any {
  const validations = new Array(amount).fill("");
  return Object.assign(
    {},
    ...validations.map((_, index) => {
      const position = index + 1;
      return {
        [`nome_passageiro_${position}`]: yup.string(),
        [`cpf_passageiro_${position}`]: yup
          .string()
          .when([`nome_passageiro_${position}`], {
            is: (value: { value: string }) => {
              const isValid = value !== undefined && String(value)?.length > 0;
              return isValid;
            },
            then: schema => schema.required(messageValidations.required)
          })
      };
    })
  );
}

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
    saida: yup.string().required(messageValidations.required),
    destino: yup.string().required(messageValidations.required),
    event__data: yup
      .string()
      .required(messageValidations.required)
      .min(10, messageValidations.date)
      .test(
        "event__data",
        messageValidations.date,
        (value, { createError, path }) => {
          if (value?.length === 10) {
            if (!validFutureDate(value)) {
              return createError({
                message: messageValidations.dateBefore,
                path
              });
            }
          }
          if (!checkValidDate(value)) {
            return createError({
              message: messageValidations.date,
              path
            });
          }
          return true;
        }
      ),
    ...setAmoutItensValidation(20)
  })
);

export const validateTransportAuthorization = validateFormValues(
  yup.object({
    isAuthorized: yup.bool(),
    justificativa: yup.string().when("isAuthorized", {
      is: false,
      then: schema => schema.required(messageValidations.required)
    })
  })
);
