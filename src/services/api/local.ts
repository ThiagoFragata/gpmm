import type {
  serviceDeleteLocalProps,
  serviceGetLocalByIdResponse,
  serviceGetLocalResponse,
  servicePostLocalProps,
  servicePutLocalProps,
  serviceGetLocalProps
} from "@/_types/Local/ServiceLocal";
import { ApiToken } from "./";
import { RESOURCE, RESOURCE_LOCAL } from "./endpoints";

export async function serviceGetLocal({
  page,
  size
}: serviceGetLocalProps): Promise<serviceGetLocalResponse> {
  const { data } = await ApiToken().get<serviceGetLocalResponse>(
    `${RESOURCE_LOCAL}?page=${page}&size=${size}`
  );
  return data;
}

export async function serviceGetLocalById(
  id: number
): Promise<serviceGetLocalByIdResponse> {
  const { data } = await ApiToken().get<serviceGetLocalByIdResponse>(
    `${RESOURCE}/${id}`
  );
  return data;
}

export async function servicePostLocal(
  payload: servicePostLocalProps
): Promise<serviceGetLocalResponse> {
  const { data } = await ApiToken().post<serviceGetLocalResponse>(
    RESOURCE_LOCAL,
    payload
  );
  return data;
}

export async function servicePutLocal(
  payload: servicePutLocalProps
): Promise<serviceGetLocalResponse> {
  const { data } = await ApiToken().put<serviceGetLocalResponse>(
    `${RESOURCE_LOCAL}/${payload?.id ?? ""}`,
    {
      descricao: payload?.descricao,
      identificacao: payload?.identificacao,
      totalDeAssento: payload?.totalDeAssento
    }
  );
  return data;
}

export async function serviceDeleteLocal(
  payload: serviceDeleteLocalProps
): Promise<void> {
  const { id } = payload;
  await ApiToken().delete(`${RESOURCE}/${id}`);
}
