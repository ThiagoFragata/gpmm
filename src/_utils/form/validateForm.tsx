import { setIn } from "final-form";

export const validateFormValues = (schema: any) => async (values: any) => {
  let currentSchema = schema;
  if (typeof schema === "function") {
    currentSchema = schema();
  }
  try {
    await currentSchema.validate(values, { abortEarly: false });
  } catch (err: any) {
    const errors = err.inner.reduce((formError: any, innerError: any) => {
      return setIn(formError, innerError.path, innerError.message);
    }, {});
    return errors;
  }
  return null;
};
