import {
  type servicePostCommunicationProps,
  type serviceGetCommunicationProps,
  type serviceGetCommunicationResponse
} from "@/_types/RequestCommunication/ServiceRequestCommunication";
import { ApiToken } from "./";
import { REQUEST_COMMUNICATION } from "./endpoints";

export async function serviceGetCommunication({
  page,
  size
}: serviceGetCommunicationProps): Promise<serviceGetCommunicationResponse> {
  const { data } = await ApiToken().get<serviceGetCommunicationResponse>(
    `${REQUEST_COMMUNICATION}?page=${page}&size=${size}`
  );
  return data;
}

export async function servicePostCommunication(
  payload: servicePostCommunicationProps
): Promise<void> {
  await ApiToken().post(REQUEST_COMMUNICATION, payload);
}
