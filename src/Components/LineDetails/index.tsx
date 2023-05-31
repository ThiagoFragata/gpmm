import React from "react";
import { ContainerLineDetails } from "./style";
import { type LineDetailsProps } from "@/_types/LineDetails";

export function LineDetails({ label, value }: LineDetailsProps): JSX.Element {
  return (
    <ContainerLineDetails>
      <p className="label">{label}</p>
      <p className="value">{value ?? "Não informado"}</p>
    </ContainerLineDetails>
  );
}
