export interface IItemLocal {
  id?: number;
  descricao: string;
  identificacao: string;
  totalDeAssento: string;
}

export interface serviceGetLocalResponse {
  content: IItemLocal[];
}

export type serviceGetLocalByIdResponse = IItemLocal;

export type servicePostLocalProps = IItemLocal;

export type servicePutLocalProps = IItemLocal;

export interface serviceDeleteLocalProps {
  id: number;
}
