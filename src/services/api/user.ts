import type {
  serviceGetUserByIdResponse,
  serviceGetUserResponse,
  serviceGetUsersProps,
  servicePostLoginProps,
  servicePostLoginResponse,
  servicePostUserProps,
  servicePutUserProps
} from "@/_types/Users/serviceUsers";
import { apiToken, baseAPI } from "./";
import { LOGIN, USERS, USER_ADM_SEND_CODE } from "./endpoints";

export async function servicePostLogin(
  payload: servicePostLoginProps
): Promise<servicePostLoginResponse> {
  const { data } = await baseAPI.post<servicePostLoginResponse>(LOGIN, payload);
  return data;
}

export async function serviceGetUsers({
  page,
  size
}: serviceGetUsersProps): Promise<serviceGetUserResponse> {
  const { data } = await baseAPI.get<serviceGetUserResponse>(
    `${USERS}?page=${page}&size=${size}`,
    apiToken
  );
  return data;
}

export async function serviceGetUserById(
  id: number
): Promise<serviceGetUserByIdResponse> {
  const { data } = await baseAPI.get<serviceGetUserByIdResponse>(
    `${USERS}/${id}`,
    apiToken
  );
  return data;
}

export async function servicePostUser(
  payload: servicePostUserProps
): Promise<serviceGetUserResponse> {
  const { data } = await baseAPI.post<serviceGetUserResponse>(
    USERS,
    payload,
    apiToken
  );
  baseAPI.post(
    USER_ADM_SEND_CODE,
    {
      email: payload?.email
    },
    apiToken
  );
  return data;
}

export async function servicePutUser({
  id,
  payload
}: servicePutUserProps): Promise<serviceGetUserResponse> {
  const { data } = await baseAPI.put<serviceGetUserResponse>(
    `${USERS}/${id}`,
    payload,
    apiToken
  );
  return data;
}
