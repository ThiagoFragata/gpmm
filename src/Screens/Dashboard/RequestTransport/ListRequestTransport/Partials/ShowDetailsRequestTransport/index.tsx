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
import { type ShowDetailsRequestTransportProps } from "@/_types/RequestTransport/ListRequestTransport";
import { type typeStatusRequest } from "@/_types/StatusRequest";

export function ShowDetailsRequestTransport({
  isOpen,
  data,
  onClose
}: ShowDetailsRequestTransportProps): JSX.Element {
  return (
    <SideView isVisible={isOpen} size="large" onClose={onClose}>
      <ContainerShowDetails>
        <div className="details__header">
          <TitleDetails
            title="Detalhes da solicitação"
            subTitle="Veja todos os detalhes disponíveis sobre a solicitação"
          />
          <IconButton name="CloseIcon" onClick={onClose} />
        </div>
        <TitleSubtitle title="Solicitante" className="title__section" />
        <StatusRequest
          type={data?.autorizacao as typeStatusRequest}
          className="details__status"
        />
        <TitleSubtitle
          title="Informações do solicitante"
          className="title__section"
        />
        <div className="details__fields">
          <LineDetails label="Usuário do sistema" value={data?.nome} />
          <LineDetails
            label={
              data?.externo === "Não" ? "É externo?" : "Solicitante externo"
            }
            value={data?.externo}
          />
          <LineDetails label="SIAPE" value={data?.siape} />
          <LineDetails label="Telefone" value={data?.telefone} />
          <LineDetails label="E-mail" value={data?.email} />
        </div>
        <TitleSubtitle
          title="Informações do translado"
          className="title__section"
        />
        <div className="details__fields">
          <LineDetails
            label="Finalidade"
            value={data?.finalidade}
            className="two__columns"
          />
          <LineDetails label="Data revervada" value={data?.data_evento} />
          <LineDetails
            label="Data da solicitação"
            value={data?.data_solicitacao}
          />
          <LineDetails label="Saída" value={data?.saida} />
          <LineDetails label="Destino" value={data?.destino} />
          <LineDetails label="Nome do motorista" value={data?.nome_motorista} />
          <LineDetails label="CNH do motorista" value={data?.motorista} />
          <LineDetails label="Veículo" value={data?.veiculo} />
          {data?.shouldRenderJustify && (
            <LineDetails
              label="Usuário do sistema"
              className="two__columns"
              value={data?.justificativa}
            />
          )}
        </div>
        <TitleSubtitle
          title="Informações dos passageiros"
          className="title__section"
        />
        <div className="details__fields">
          {(data?.passageiros ?? []).map((item, index) => {
            const position = index + 1;
            return (
              <div key={index} className="fields__passageiros">
                <LineDetails
                  label={`Nome passageiro ${position}`}
                  value={item?.nome}
                />
                <LineDetails
                  label={`CPF passageiro ${position}`}
                  value={item.cpf}
                />
              </div>
            );
          })}
        </div>
      </ContainerShowDetails>
    </SideView>
  );
}
