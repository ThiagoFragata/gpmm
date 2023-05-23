import React from "react";
import { ContainerListSectors, TopDefault } from "./style";
import { useListSectors } from "./useListSectors";
import { SearchIcon } from "@/assets/icons";
import { Button } from "../Button";
import { TopNewSector } from "./Partials/TopNewSector";

export function ListSectors(): JSX.Element {
  const {
    onCallTopNew,
    onCallTopDefault,
    isNotFoundData,
    isLoading,
    dataSector,
    isVisibleDefaultTop,
    isVisibleNewSector
  } = useListSectors();
  return (
    <ContainerListSectors>
      <div className="container__box">
        <div className="box__search">
          <SearchIcon className="search__icon" />
          <input
            type="text"
            className="search__input"
            placeholder="Digite algo para buscar"
          />
        </div>
        <TopDefault isVisible={isVisibleDefaultTop}>
          <h3 className="top__title">Exibindo todos 10 setores registrados</h3>
          <Button title="Novo" onClick={onCallTopNew} />
        </TopDefault>
        <TopNewSector isVisible={isVisibleNewSector} isLoading={isLoading} />
      </div>
    </ContainerListSectors>
  );
}
