import type {
  serviceGetUserResponse,
  serviceGetUsersProps,
  servicePostUserProps
} from "@/_types/Users/serviceUsers";
import { baseAPI } from "./";
import { USERS, USER_ADM_SEND_CODE } from "./endpoints";

export async function serviceGetUsers({
  page,
  size
}: serviceGetUsersProps): Promise<serviceGetUserResponse> {
  const { data } = await baseAPI.get<serviceGetUserResponse>(
    `${USERS}?page=${page}&size=${size}`
  );
  return data;
}

// export async function serviceGetUserById(
// id: number
// ): Promise<serviceGetUserByIdResponse> {
// const { data } = await baseAPI.get<serviceGetUserByIdResponse>(
// `${RESOURCE}/${id}`
// );
// return data;
// }

export async function servicePostUser(
  payload: servicePostUserProps
): Promise<serviceGetUserResponse> {
  const { data } = await baseAPI.post<serviceGetUserResponse>(USERS, payload);
  baseAPI.post(USER_ADM_SEND_CODE, {
    email: payload?.email
  });
  return data;
}

// export async function servicePutLocal(
// payload: servicePutLocalProps
// ): Promise<serviceGetUserResponse> {
// const { data } = await baseAPI.put<serviceGetUserResponse>(
// USERS,
// payload
// );
// return data;
// }
