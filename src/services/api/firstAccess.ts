import { baseAPI } from "./";
import { REQUEST_CODE } from "./endpoints";

export async function servicePostRequestCode(email: string): Promise<string> {
  const { data } = await baseAPI.post<string>(REQUEST_CODE, { email });
  return data;
}
