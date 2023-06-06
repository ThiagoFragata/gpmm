import { apiToken, baseAPI } from "./";
import { DRIVER } from "./endpoints";
import {
  type serviceGetDriverProps,
  type serviceGetDriverResponse
} from "@/_types/Driver/ServiceDriver";

export async function serviceGetDriver({
  page,
  size
}: serviceGetDriverProps): Promise<serviceGetDriverResponse> {
  const { data } = await baseAPI.get<serviceGetDriverResponse>(
    `${DRIVER}?page=${page}&size=${size}`,
    apiToken
  );
  return data;
}
