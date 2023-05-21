import type {
  serviceDeleteTransportProps,
  serviceGetTransportProps,
  serviceGetTransportResponse
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

export async function serviceDeleteTransport(
  payload: serviceDeleteTransportProps
): Promise<void> {
  const { id } = payload;
  await baseAPI.delete(`${RESOURCE_TRANSPORT}/${id}`);
}
