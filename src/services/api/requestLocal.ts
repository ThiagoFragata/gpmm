import {
  type serviceGetRequestLocalResponse,
  type serviceGetRequestLocalProps,
  type servicePostRequestLocalProps
} from "@/_types/RequestsLocal/ServiceRequestLocal";
import { ApiToken } from "./";
import { REQUEST_CREATE_LOCAL, REQUEST_LOCAL } from "./endpoints";

export async function serviceGeRequestLocal({
  page,
  size
}: serviceGetRequestLocalProps): Promise<serviceGetRequestLocalResponse> {
  const { data } = await ApiToken().get<serviceGetRequestLocalResponse>(
    `${REQUEST_LOCAL}?page=${page}&size=${size}`
  );
  return data;
}

export async function servicePostrequestLocal(
  payload: servicePostRequestLocalProps
): Promise<serviceGetRequestLocalResponse> {
  const { data } = await ApiToken().post<serviceGetRequestLocalResponse>(
    REQUEST_CREATE_LOCAL,
    payload
  );
  return data;
}
