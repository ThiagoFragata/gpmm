import { type IDataPage } from "../Common";

export interface IItemSector {
  id?: number;
  nome: string;
}

export type serviceGetSectorsResponse = {
  content: IItemSector[];
} & IDataPage;

export interface serviceGetSectorsProps {
  page: number;
  size: number;
}

export type serviceGetSectorsByIdResponse = IItemSector;

export type servicePostSectorsProps = IItemSector;

export type servicePutSectorsProps = IItemSector;

export interface serviceDeleteSectorsProps {
  id: number;
}
