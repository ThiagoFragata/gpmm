import React from "react";
import { ContainerLineDetails } from "./style";
import { type LineDetailsProps } from "@/_types/LineDetails";

export function LineDetails({
  label,
  value,
  className
}: LineDetailsProps): JSX.Element {
  return (
    <ContainerLineDetails className={className}>
      <p className="label">{label}</p>
      <p className="value">{value ?? "Não informado"}</p>
    </ContainerLineDetails>
  );
}
