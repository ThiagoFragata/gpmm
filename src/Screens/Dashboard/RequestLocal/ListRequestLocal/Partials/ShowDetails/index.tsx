import React from "react";
import { ContainerShowDetails } from "./style";
import {
  IconButton,
  LineDetails,
  SideView,
  StatusRequest,
  TitleDetails,
  TitleSubtitle
} from "@/Components";
import { type ShowDetailsRequestLocalProps } from "@/_types/RequestsLocal/ListRequestLocal";
import { type typeStatusRequest } from "@/_types/StatusRequest";

export function ShowDetailsRequestLocal({
  isOpen,
  data,
  onClose
}: ShowDetailsRequestLocalProps): JSX.Element {
  return (
    <SideView isVisible={isOpen} size="large" onClose={onClose}>
      <ContainerShowDetails>
        <div className="details__header">
          <TitleDetails
            title="Detalhes de solicitação"
            subTitle="Veja todos os detalhes disponíveis sobre o registro"
          />
          <IconButton name="CloseIcon" onClick={onClose} />
        </div>
        <TitleSubtitle
          title="Status da solicitação"
          className="title__section"
        />
        <StatusRequest
          type={data?.autorizacao as typeStatusRequest}
          className="details__status"
        />
        <TitleSubtitle
          title="Informações do solicitante"
          className="title__section"
        />
        <div className="details__fields">
          <LineDetails label="Usuário do sistema" value={data?.solicitante} />
          <LineDetails
            label={
              data?.externo === "Não" ? "É externo?" : "Solicitante externo"
            }
            value={data?.externo ?? ""}
          />
          <LineDetails label="Telefone" value={data?.telefone} />
          <LineDetails label="CPF" value={data?.cpf} />
          <LineDetails label="SIAPE" value={data?.siape} />
        </div>
        <TitleSubtitle
          title="Informações da solicitação"
          className="title__section"
        />
        <div className="details__fields">
          <LineDetails
            label="Finalidade da reserva"
            value={data?.finalidade}
            className="two__columns"
          />
          <LineDetails
            label="Sala"
            value={`${data?.local} - ${data?.identificacao}`}
          />
          <LineDetails label="Data reversada" value={data?.data_evento} />
          <LineDetails
            label="Data da solicitação"
            value={data?.data_solicitacao}
          />
        </div>
      </ContainerShowDetails>
    </SideView>
  );
}
