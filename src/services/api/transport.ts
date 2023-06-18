import type {
  serviceDeleteTransportProps,
  serviceGetTransportByIdResponse,
  serviceGetTransportProps,
  serviceGetTransportResponse,
  servicePostTransportProps,
  servicePutTransportProps
} from "@/_types/Transport/serviceTransport";
import { ApiToken } from "./";
import { RESOURCE, RESOURCE_TRANSPORT } from "./endpoints";

export async function serviceGetTransport({
  page,
  size
}: serviceGetTransportProps): Promise<serviceGetTransportResponse> {
  const { data } = await ApiToken().get<serviceGetTransportResponse>(
    `${RESOURCE_TRANSPORT}?page=${page}&size=${size}`
  );
  return data;
}

export async function serviceGetTransportById(
  id: number
): Promise<serviceGetTransportByIdResponse> {
  const { data } = await ApiToken().get<serviceGetTransportByIdResponse>(
    `${RESOURCE}/${id}`
  );
  return data;
}

export async function servicePostTransport(
  payload: servicePostTransportProps
): Promise<serviceGetTransportResponse> {
  const { data } = await ApiToken().post<serviceGetTransportResponse>(
    RESOURCE_TRANSPORT,
    payload
  );
  return data;
}

export async function servicePutTransport(
  payload: servicePutTransportProps
): Promise<serviceGetTransportResponse> {
  const { data } = await ApiToken().put<serviceGetTransportResponse>(
    `${RESOURCE}/${payload?.id ?? ""}`,
    {
      descricao: payload?.descricao,
      identificacao: payload?.identificacao,
      totalDeAssento: payload?.totalDeAssento
    }
  );
  return data;
}

export async function serviceDeleteTransport(
  payload: serviceDeleteTransportProps
): Promise<void> {
  const { id } = payload;
  await ApiToken().delete(`${RESOURCE}/${id}`);
}
