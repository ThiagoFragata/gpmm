import React from "react";
import { ContainerShowDetails } from "./style";
import {
  IconButton,
  SideView,
  TitleDetails,
  TitleSubtitle
} from "@/Components";
import { type ShowDetailsRequestTransportProps } from "@/_types/RequestTransport/ListRequestTransport";

export function ShowDetailsRequestTransport({
  onClose,
  isOpen,
  data
}: ShowDetailsRequestTransportProps): JSX.Element {
  return (
    <SideView isVisible={isOpen} size="large" onClose={onClose}>
      <ContainerShowDetails>
        <div className="details__hedaer">
          <TitleDetails
            title="Detalhes da solicitação"
            subTitle="Veja todos os detalhes disponíveis sobre a solicitação"
          />
          <IconButton name="CloseIcon" onClick={onClose} />
        </div>
        <TitleSubtitle title="Solicitante" className="title__section" />
      </ContainerShowDetails>
    </SideView>
  );
}
