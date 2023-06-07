import { apiToken, baseAPI } from "./";
import { REQUEST_CREATE_TRANSPORT, REQUEST_TRANSPORT } from "./endpoints";
import {
  type servicePostrequestTransportProps,
  type serviceGetRequestTransportProps,
  type serviceGetRequestTransportResponse,
  type IItemRequestTransport
} from "@/_types/RequestTransport/ServiceRequestTransport";

export async function serviceGetRequestTransport({
  page,
  size
}: serviceGetRequestTransportProps): Promise<serviceGetRequestTransportResponse> {
  const { data } = await baseAPI.get<serviceGetRequestTransportResponse>(
    `${REQUEST_TRANSPORT}?page=${page}&size=${size}`,
    apiToken
  );
  return data;
}

export async function servicePostrequestTransport(
  payload: servicePostrequestTransportProps
): Promise<serviceGetRequestTransportResponse> {
  const { data } = await baseAPI.post<serviceGetRequestTransportResponse>(
    REQUEST_CREATE_TRANSPORT,
    payload,
    apiToken
  );
  return data;
}

export async function serviceGetRequestTransportById(
  id: number
): Promise<IItemRequestTransport> {
  const { data } = await baseAPI.get<IItemRequestTransport>(
    `${REQUEST_TRANSPORT}/${id}`,
    apiToken
  );
  return data;
}

export async function servicePutTransportAuthorization(payload: {
  autorizacao: string;
  justificativa?: string;
  id: number;
}): Promise<IItemRequestTransport> {
  const { data } = await baseAPI.put<IItemRequestTransport>(
    `${REQUEST_TRANSPORT}/${payload.id}`,
    {
      autorizacao: payload?.autorizacao,
      justificativa: payload?.justificativa
    },
    apiToken
  );
  return data;
}
