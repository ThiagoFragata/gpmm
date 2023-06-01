import { baseAPI } from "./";
import { REQUEST_CODE, VALID_CODE } from "./endpoints";

export async function servicePostRequestCode(email: string): Promise<string> {
  const { data } = await baseAPI.post<string>(REQUEST_CODE, { email });
  return data;
}

export async function servicePostValidCode(payload: {
  codigo: string;
  email: string;
}): Promise<string> {
  const { data } = await baseAPI.post<string>(VALID_CODE, payload);
  return data;
}
