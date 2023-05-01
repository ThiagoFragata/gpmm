import React from "react";
import { ContainerHeaderBox } from "./style";
import { Search } from "../Search";

export function HeaderBox(): JSX.Element {
  return (
    <ContainerHeaderBox>
      <Search />
    </ContainerHeaderBox>
  );
}
