import React from "react";
import { ContainerShowDetails } from "./style";
import { type ShowDetailsProps } from "@/_types/Users/ListUsers";
import moment from "moment";
import "moment/locale/pt-br";
import {
  DriveStatusAuthorization,
  IconButton,
  LineDetails,
  SideView,
  Status,
  TitleDetails,
  TitleSubtitle
} from "@/Components";
import { regexCPF, regexPhone } from "@/_utils/masks";
import { type typeStringStatus } from "@/_types/Common";

export function ShowDetails({
  isOpen,
  onClose,
  data
}: ShowDetailsProps): JSX.Element {
  const cpf = data?.cpf !== undefined ? regexCPF(data?.cpf) : "";
  const phone =
    data?.telefone?.numero !== undefined
      ? regexPhone(data?.telefone?.numero)
      : "";
  const shouldRenderCNH = data?.motorista?.numeroCnh !== undefined;
  const formatedBirthDate =
    data?.dataNascimento !== undefined
      ? moment(data?.dataNascimento).format("DD [de] MMMM [de] YYYY")
      : "";
  const currentAge =
    data?.dataNascimento !== undefined
      ? `(${moment().diff(data?.dataNascimento, "years")} anos)`
      : "";
  const isDriverAuthorization = data?.motorista?.numeroCnh !== undefined;
  return (
    <SideView isVisible={isOpen} size="large" onClose={onClose}>
      <ContainerShowDetails>
        <div className="details__hedaer">
          <TitleDetails
            title={`Detalhes de ${data.firstName}`}
            subTitle="Veja todos os detalhes disponíveis sobre o usuário"
          />
          <IconButton name="CloseIcon" onClick={onClose} />
        </div>
        <TitleSubtitle title="Status da conta" className="title__section" />
        <Status
          type={data?.status as typeStringStatus}
          size="large"
          className="details__status"
        />
        <TitleSubtitle
          title="Informações principais"
          className="title__section"
        />
        <div className="details__fields">
          <LineDetails label="Nome" value={data?.nome} />
          <LineDetails label="SIAPE" value={data?.siape} />
          <LineDetails label="E-mail" value={data?.email} />
          <LineDetails label="CPF" value={cpf} />
          <LineDetails
            label="Data de nascimento"
            value={`${formatedBirthDate} ${currentAge ?? ""}`}
          />
          <LineDetails label="Celular" value={phone} />
          <LineDetails label="Setor" value={data?.setor?.nome} />
          {shouldRenderCNH && (
            <LineDetails label="CNH" value={data?.motorista?.numeroCnh} />
          )}
        </div>
        <TitleSubtitle
          title="Autorização para dirigir"
          className="title__section"
        />
        <DriveStatusAuthorization
          authorization={isDriverAuthorization}
          className="details__auth"
        />
      </ContainerShowDetails>
    </SideView>
  );
}
