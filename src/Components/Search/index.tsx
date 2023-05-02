import React from "react";
import { ContainerSearch } from "./style";
import { SearchIcon } from "@/assets/icons";

export function Search(): JSX.Element {
  return (
    <ContainerSearch>
      <input
        type="text"
        className="search__text"
        name="search"
        id="search"
        placeholder="Digite o item buscado"
        maxLength={150}
      />
      <SearchIcon className="search__icon" />
    </ContainerSearch>
  );
}
