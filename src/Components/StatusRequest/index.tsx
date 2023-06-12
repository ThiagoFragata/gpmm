import React from "react";
import { ContainerStatusRequest } from "./style";
import { type StatusRequestProps } from "@/_types/StatusRequest";

export function StatusRequest({
  type,
  className
}: StatusRequestProps): JSX.Element {
  return (
    <ContainerStatusRequest type={type} className={className}>
      <p className="status__label">
        {type?.charAt(0).toUpperCase() + type?.slice(1).toLocaleLowerCase()}
      </p>
    </ContainerStatusRequest>
  );
}
