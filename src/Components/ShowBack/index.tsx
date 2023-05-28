import React from "react";
import { ContainerShowBack } from "./style";
import { type ShowBackProps } from "@/_types/ShowBack";

export function ShowBack({
  isOpen,
  isShadow = true,
  onClose
}: ShowBackProps): JSX.Element {
  return (
    <ContainerShowBack isShadow={isShadow} isOpen={isOpen} onClick={onClose} />
  );
}
