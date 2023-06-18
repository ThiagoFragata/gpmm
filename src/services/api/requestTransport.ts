import { ApiToken } from "./";
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
  const { data } = await ApiToken().get<serviceGetRequestTransportResponse>(
    `${REQUEST_TRANSPORT}?page=${page}&size=${size}`
  );
  return data;
}

export async function servicePostrequestTransport(
  payload: servicePostrequestTransportProps
): Promise<serviceGetRequestTransportResponse> {
  const { data } = await ApiToken().post<serviceGetRequestTransportResponse>(
    REQUEST_CREATE_TRANSPORT,
    payload
  );
  return data;
}

export async function serviceGetRequestTransportById(
  id: number
): Promise<IItemRequestTransport> {
  const { data } = await ApiToken().get<IItemRequestTransport>(
    `${REQUEST_TRANSPORT}/${id}`
  );
  return data;
}

export async function servicePutTransportAuthorization(payload: {
  autorizacao: string;
  justificativa?: string;
  id: number;
}): Promise<IItemRequestTransport> {
  const { data } = await ApiToken().put<IItemRequestTransport>(
    `${REQUEST_TRANSPORT}/${payload.id}`,
    {
      autorizacao: payload?.autorizacao,
      justificativa: payload?.justificativa
    }
  );
  return data;
}
