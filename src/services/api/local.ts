import type {
  serviceDeleteLocalProps,
  serviceGetLocalByIdResponse,
  serviceGetLocalResponse,
  servicePostLocalProps,
  servicePutLocalProps,
  serviceGetLocalProps
} from "@/_types/Local/ServiceLocal";
import { apiToken, baseAPI } from "./";
import { RESOURCE, RESOURCE_LOCAL } from "./endpoints";

export async function serviceGetLocal({
  page,
  size
}: serviceGetLocalProps): Promise<serviceGetLocalResponse> {
  const { data } = await baseAPI.get<serviceGetLocalResponse>(
    `${RESOURCE_LOCAL}?page=${page}&size=${size}`,
    apiToken
  );
  return data;
}

export async function serviceGetLocalById(
  id: number
): Promise<serviceGetLocalByIdResponse> {
  const { data } = await baseAPI.get<serviceGetLocalByIdResponse>(
    `${RESOURCE}/${id}`,
    apiToken
  );
  return data;
}

export async function servicePostLocal(
  payload: servicePostLocalProps
): Promise<serviceGetLocalResponse> {
  const { data } = await baseAPI.post<serviceGetLocalResponse>(
    RESOURCE_LOCAL,
    payload,
    apiToken
  );
  return data;
}

export async function servicePutLocal(
  payload: servicePutLocalProps
): Promise<serviceGetLocalResponse> {
  const { data } = await baseAPI.put<serviceGetLocalResponse>(
    RESOURCE_LOCAL,
    payload,
    apiToken
  );
  return data;
}

export async function serviceDeleteLocal(
  payload: serviceDeleteLocalProps
): Promise<void> {
  const { id } = payload;
  await baseAPI.delete(`${RESOURCE_LOCAL}/${id}`);
}
