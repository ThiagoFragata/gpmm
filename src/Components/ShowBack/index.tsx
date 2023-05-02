import React from "react";
import { ContainerShowBack } from "./style";
import { type ShowBackProps } from "@/_types/ShowBack";

export function ShowBack({ isOpen, onClose }: ShowBackProps): JSX.Element {
  return <ContainerShowBack isOpen={isOpen} onClick={onClose} />;
}
