import type {
  serviceDeleteSectorsProps,
  serviceGetSectorsProps,
  serviceGetSectorsResponse,
  servicePostSectorsProps
} from "@/_types/Sectors/serviceSectors";
import { baseAPI } from "./";
import { SECTORS } from "./endpoints";

export async function serviceGetSectors({
  page,
  size
}: serviceGetSectorsProps): Promise<serviceGetSectorsResponse> {
  const { data } = await baseAPI.get<serviceGetSectorsResponse>(
    `${SECTORS}?page=${page}&size=${size}`
  );
  return data;
}

export async function servicePostSectors(
  payload: servicePostSectorsProps
): Promise<serviceGetSectorsResponse> {
  const { data } = await baseAPI.post<serviceGetSectorsResponse>(
    SECTORS,
    payload
  );
  return data;
}

//   export async function serviceDeleteSectors(
//     payload: serviceDeleteSectorsProps
//   ): Promise<void> {
//     const { id } = payload;
//     await baseAPI.delete(`${SECTORS}/${id}`);
//   }
