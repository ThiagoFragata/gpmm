import React from "react";
import { ContainerListSectors, TopDefault } from "./style";
import { useListSectors } from "./useListSectors";
import { Button } from "../Button";
import { TopNewSector } from "./Partials/TopNewSector";
import { List } from "./Partials/List";
import { IconButton } from "../IconButton";
import { type ListSectorsProps } from "@/_types/ListSectors";
import { AwaitRequest } from "../AwaitRequest";
import { DialogModal } from "../DialogModal";

export function ListSectors({
  isShow,
  formRef,
  onClose
}: ListSectorsProps): JSX.Element {
  const {
    onCallTopNew,
    onCallTopDefault,
    onHandlerDialogModal,
    onGetDataDelete,
    onConfirmDelete,
    onCreateSector,
    onSelectSector,
    isAwaitDelete,
    isOpenModalDialog,
    dataDelete,
    isNotFoundData,
    isLoading,
    dataSector,
    isVisibleDefaultTop,
    isVisibleNewSector,
    tableTitle,
    amountSector
  } = useListSectors({ onClose, formRef });
  return (
    <ContainerListSectors isShow={isShow}>
      <AwaitRequest isVisible={isAwaitDelete} />
      <DialogModal
        title={`Deseja realmente excluir o setor ${dataDelete.name}?`}
        description="Ao realizar está ação, o item não poderá ser recuperado."
        isOpen={isOpenModalDialog}
        titleActionCancel="Não"
        titleActionConfirm="Sim"
        onActionConfirm={onConfirmDelete}
        ocActionCancel={onHandlerDialogModal}
        variant="danger"
      />
      <div className="container__box">
        <div className="box__search">
          {/* <SearchIcon className="search__icon" />
          <input
            type="text"
            className="search__input"
            placeholder="Digite algo para buscar"
          /> */}
          <div className="search__close">
            <IconButton name="CloseIcon" onClick={onClose} />
          </div>
        </div>
        <TopDefault isVisible={isVisibleDefaultTop}>
          <h3 className="top__title">
            Exibindo todos {amountSector} setores registrados
          </h3>
          <Button title="Novo" onClick={onCallTopNew} />
        </TopDefault>
        <TopNewSector
          isVisible={isVisibleNewSector}
          isLoading={isLoading}
          onCreateSector={onCreateSector}
          onCallTopDefault={onCallTopDefault}
        />
        <List
          dataSector={dataSector}
          isNotFoundData={isNotFoundData}
          isLoading={isLoading}
          tableTitle={tableTitle}
          isAwaitDelete={isAwaitDelete}
          onGetDataDelete={onGetDataDelete}
          onSelectSector={onSelectSector}
        />
      </div>
    </ContainerListSectors>
  );
}
