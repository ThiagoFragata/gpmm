import { apiToken, baseAPI } from "./";
import { REQUEST_CREATE_TRANSPORT, REQUEST_TRANSPORT } from "./endpoints";
import {
  type servicePostrequestTransportProps,
  type serviceGetRequestTransportProps,
  type serviceGetRequestTransportResponse
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
