import type {
  IItemTransport,
  serviceDeleteTransportProps,
  serviceGetTransportByIdResponse,
  serviceGetTransportProps,
  serviceGetTransportResponse,
  servicePostTransportProps,
  servicePutTransportProps
} from "@/_types/Transport/serviceTransport";
import { apiToken, baseAPI } from "./";
import { RESOURCE, RESOURCE_TRANSPORT } from "./endpoints";

export async function serviceGetTransport({
  page,
  size
}: serviceGetTransportProps): Promise<serviceGetTransportResponse> {
  const { data } = await baseAPI.get<serviceGetTransportResponse>(
    `${RESOURCE_TRANSPORT}?page=${page}&size=${size}`,
    apiToken
  );
  return data;
}

export async function serviceGetTransportById(
  id: number
): Promise<serviceGetTransportByIdResponse> {
  const { data } = await baseAPI.get<serviceGetTransportByIdResponse>(
    `${RESOURCE}/${id}`,
    apiToken
  );
  return data;
}

export async function servicePostTransport(
  payload: servicePostTransportProps
): Promise<serviceGetTransportResponse> {
  const { data } = await baseAPI.post<serviceGetTransportResponse>(
    RESOURCE_TRANSPORT,
    payload,
    apiToken
  );
  return data;
}

export async function servicePutTransport(
  payload: servicePutTransportProps
): Promise<serviceGetTransportResponse> {
  const { data } = await baseAPI.put<serviceGetTransportResponse>(
    `${RESOURCE}/${payload?.id ?? ""}`,
    {
      descricao: payload?.descricao,
      identificacao: payload?.identificacao,
      totalDeAssento: payload?.totalDeAssento
    },
    apiToken
  );
  return data;
}

export async function serviceDeleteTransport(
  payload: serviceDeleteTransportProps
): Promise<void> {
  const { id } = payload;
  await baseAPI.delete(`${RESOURCE_TRANSPORT}/${id}`);
}
