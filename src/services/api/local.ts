import type {
  serviceGetLocalResponse,
  servicePostLocalProps,
  servicePutLocalProps
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

export async function servicePutLocal(
  payload: servicePutLocalProps
): Promise<serviceGetLocalResponse> {
  const { data } = await baseAPI.put<serviceGetLocalResponse>(
    RESOURCE_LOCAL,
    payload
  );
  console.log("🔥🔥🔥🔥________________________🚑");
  console.log(JSON.stringify(data, null, 2));
  console.log("🔥🔥🔥🔥________________________🚑");
  return data;
}
