import { ApiToken } from "./";
import { DRIVER } from "./endpoints";
import {
  type IItemDriver,
  type serviceGetDriverProps,
  type serviceGetDriverResponse
} from "@/_types/Driver/ServiceDriver";

export async function servicePostDrive(
  payload: IItemDriver
): Promise<serviceGetDriverResponse> {
  const { data } = await ApiToken().post<serviceGetDriverResponse>(
    DRIVER,
    payload
  );
  return data;
}

export async function serviceGetDriver({
  page,
  size
}: serviceGetDriverProps): Promise<serviceGetDriverResponse> {
  const { data } = await ApiToken().get<serviceGetDriverResponse>(
    `${DRIVER}?page=${page}&size=${size}`
  );
  return data;
}
