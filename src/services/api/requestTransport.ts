import { apiToken, baseAPI } from "./";
import { REQUEST_TRANSPORT } from "./endpoints";
import {
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

// export async function servicePostrequestLocal(
//   payload: servicePostRequestLocalProps
// ): Promise<serviceGetRequestLocalResponse> {
//   const { data } = await baseAPI.post<serviceGetRequestLocalResponse>(
//     REQUEST_CREATE_LOCAL,
//     payload,
//     apiToken
//   );
//   return data;
// }
