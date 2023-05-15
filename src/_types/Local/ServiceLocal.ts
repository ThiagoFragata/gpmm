export interface IItemLocal {
  id: number;
  descricao: string;
  identificacao: string;
  totalDeAssento: string;
}

export interface serviceGetLocalResponse {
  content: IItemLocal[];
}
