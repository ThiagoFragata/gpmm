import type {
  serviceDeleteTransportProps,
  serviceGetTransportProps,
  serviceGetTransportResponse,
  servicePostTransportProps
} from "@/_types/Transport/serviceTransport";
import { baseAPI } from "./";
import { RESOURCE_TRANSPORT } from "./endpoints";

export async function serviceGetTransport({
  page,
  size
}: serviceGetTransportProps): Promise<serviceGetTransportResponse> {
  const { data } = await baseAPI.get<serviceGetTransportResponse>(
    `${RESOURCE_TRANSPORT}?page=${page}&size=${size}`
  );
  return data;
}

export async function servicePostTransport(
  payload: servicePostTransportProps
): Promise<serviceGetTransportResponse> {
  const { data } = await baseAPI.post<serviceGetTransportResponse>(
    RESOURCE_TRANSPORT,
    payload
  );
  return data;
}

export async function serviceDeleteTransport(
  payload: serviceDeleteTransportProps
): Promise<void> {
  const { id } = payload;
  await baseAPI.delete(`${RESOURCE_TRANSPORT}/${id}`);
}
