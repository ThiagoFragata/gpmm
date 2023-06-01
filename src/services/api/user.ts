import type {
  serviceGetUserByIdResponse,
  serviceGetUserResponse,
  serviceGetUsersProps,
  servicePostLoginProps,
  servicePostLoginResponse,
  servicePostUserProps,
  servicePutUserProps
} from "@/_types/Users/serviceUsers";
import { baseAPI } from "./";
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
    `${USERS}?page=${page}&size=${size}`
  );
  return data;
}

export async function serviceGetUserById(
  id: number
): Promise<serviceGetUserByIdResponse> {
  const { data } = await baseAPI.get<serviceGetUserByIdResponse>(
    `${USERS}/${id}`
  );
  return data;
}

export async function servicePostUser(
  payload: servicePostUserProps
): Promise<serviceGetUserResponse> {
  const { data } = await baseAPI.post<serviceGetUserResponse>(USERS, payload);
  baseAPI.post(USER_ADM_SEND_CODE, {
    email: payload?.email
  });
  return data;
}

export async function servicePutUser({
  id,
  payload
}: servicePutUserProps): Promise<serviceGetUserResponse> {
  const { data } = await baseAPI.put<serviceGetUserResponse>(
    `${USERS}/${id}`,
    payload
  );
  return data;
}
