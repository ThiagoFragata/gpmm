import React from "react";
import type { DataBoxProps } from "@/_types/DataBox";
import { ContainerDataBox } from "./style";

export function DataBox({ children }: DataBoxProps): JSX.Element {
  return <ContainerDataBox>{children}</ContainerDataBox>;
}
