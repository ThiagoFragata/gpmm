import type {
  serviceGetSectorsProps,
  serviceGetSectorsResponse,
  servicePostSectorsProps
} from "@/_types/Sectors/serviceSectors";
import { ApiToken, apiPublic } from "./";
import { SECTORS } from "./endpoints";

export async function serviceGetSectors({
  page,
  size
}: serviceGetSectorsProps): Promise<serviceGetSectorsResponse> {
  const { data } = await apiPublic.get<serviceGetSectorsResponse>(
    `${SECTORS}?page=${page}&size=${size}`
  );
  return data;
}

export async function servicePostSectors(
  payload: servicePostSectorsProps
): Promise<serviceGetSectorsResponse> {
  const { data } = await ApiToken().post<serviceGetSectorsResponse>(
    SECTORS,
    payload
  );
  return data;
}

export async function serviceDeleteSector(id: number): Promise<void> {
  await ApiToken().delete(`${SECTORS}/${id}`);
}
