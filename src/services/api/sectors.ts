import type {
  serviceGetSectorsProps,
  serviceGetSectorsResponse,
  servicePostSectorsProps
} from "@/_types/Sectors/serviceSectors";
import { apiPublic } from "./";
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
  const { data } = await apiPublic.post<serviceGetSectorsResponse>(
    SECTORS,
    payload
  );
  return data;
}
