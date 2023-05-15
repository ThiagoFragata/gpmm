import type {
  serviceGetLocalResponse,
  servicePostLocalProps
} from "@/_types/Local/ServiceLocal";
import { baseAPI } from "./";
import { RESOURCE_LOCAL } from "./endpoints";

export async function serviceGetLocal(): Promise<serviceGetLocalResponse> {
  const { data } = await baseAPI.get<serviceGetLocalResponse>(RESOURCE_LOCAL);
  return data;
}

export async function servicePostLocal(
  payload: servicePostLocalProps
): Promise<serviceGetLocalResponse> {
  const { data } = await baseAPI.post<serviceGetLocalResponse>(
    RESOURCE_LOCAL,
    payload
  );
  return data;
}
