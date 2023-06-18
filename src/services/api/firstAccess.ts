import {
  CREATE_PASSWORD,
  FORGOT_REQUEST_CODE,
  REQUEST_CODE,
  VALID_CODE
} from "./endpoints";
import { apiPublic } from "./";

export async function servicePostRequestCode(email: string): Promise<string> {
  const { data } = await apiPublic.post<string>(REQUEST_CODE, { email });
  return data;
}

export async function servicePostRequestCodeForgotPassword(
  email: string
): Promise<string> {
  const { data } = await apiPublic.post<string>(FORGOT_REQUEST_CODE, { email });
  return data;
}

export async function servicePostValidCode(payload: {
  codigo: string;
  email: string;
}): Promise<{
  id: number;
}> {
  const { data } = await apiPublic.post<{
    id: number;
  }>(VALID_CODE, payload);
  return data;
}

export async function servicePutCreatePassword(dataForm: {
  codigo: string;
  idUser: number;
  senha: string;
}): Promise<string> {
  const payload = {
    codigo: dataForm?.codigo,
    senha: dataForm?.senha
  };
  const { idUser } = dataForm;
  const { data } = await apiPublic.put<string>(
    CREATE_PASSWORD(idUser),
    payload
  );
  return data;
}
