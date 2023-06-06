import {
  type serviceGetRequestLocalResponse,
  type serviceGetRequestLocalProps,
  type servicePostRequestLocalProps
} from "@/_types/RequestsLocal/ServiceRequestLocal";
import { apiToken, baseAPI } from "./";
import { REQUEST_CREATE_LOCAL, REQUEST_LOCAL } from "./endpoints";

export async function serviceGeRequestLocal({
  page,
  size
}: serviceGetRequestLocalProps): Promise<serviceGetRequestLocalResponse> {
  const { data } = await baseAPI.get<serviceGetRequestLocalResponse>(
    `${REQUEST_LOCAL}?page=${page}&size=${size}`,
    apiToken
  );
  return data;
}

export async function servicePostrequestLocal(
  payload: servicePostRequestLocalProps
): Promise<serviceGetRequestLocalResponse> {
  const { data } = await baseAPI.post<serviceGetRequestLocalResponse>(
    REQUEST_CREATE_LOCAL,
    payload,
    apiToken
  );
  return data;
}

// export async function serviceGetrequestLocalById(
//   id: number
// ): Promise<serviceGetrequestLocalByIdResponse> {
//   const { data } = await baseAPI.get<serviceGetrequestLocalByIdResponse>(
//     `${RESOURCE}/${id}`,
//     apiToken
//   );
//   return data;
// }

// export async function servicePutrequestLocal(
//   payload: servicePutrequestLocalProps
// ): Promise<serviceGetrequestLocalResponse> {
//   const { data } = await baseAPI.put<serviceGetrequestLocalResponse>(
//     REQUEST_LOCAL,
//     payload,
//     apiToken
//   );
//   return data;
// }

// export async function serviceDeleterequestLocal(
//   payload: serviceDeleterequestLocalProps
// ): Promise<void> {
//   const { id } = payload;
//   await baseAPI.delete(`${REQUEST_LOCAL}/${id}`);
// }
