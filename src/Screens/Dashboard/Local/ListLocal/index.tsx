import React from "react";
import { ContainerListLocal } from "./style";
import { useListLocal } from "./useListLocal";
import {
  AwaitRequest,
  Button,
  DataNotFound,
  DialogModal,
  FooterData,
  MenuAction,
  MultSkeleton,
  Skeleton,
  TableContent,
  TableItem,
  TableScroll,
  TableTitle
} from "@/Components";
import { PATHS } from "@/_utils/constants";

export function ListLocal(): JSX.Element {
  const {
    onTryAgainGetData,
    onHandlerDialogModal,
    onGetDataDelete,
    onConfirmDelete,
    onSendToEdit,
    onChangePage,
    onChangeSizePage,
    dataPagination,
    dataDelete,
    isOpenModal,
    isNotFoundData,
    tableTitle,
    dataLocal,
    isLoading,
    isAwaitDelete
  } = useListLocal();
  return (
    <ContainerListLocal>
      <AwaitRequest isVisible={isAwaitDelete} />
      <DialogModal
        title={`Deseja realmente excluir o local ${dataDelete.name}?`}
        description="Ao realizar está ação, o item não poderá ser recuperado."
        isOpen={isOpenModal}
        titleActionCancel="Não"
        titleActionConfirm="Sim"
        onActionConfirm={onConfirmDelete}
        ocActionCancel={onHandlerDialogModal}
        variant="danger"
      />
      <div className="top__options">
        <span />
        <Button
          title="Novo"
          iconName="MoreIcon"
          navigateTo={PATHS.dashboard.recursosNovoLocal}
        />
      </div>
      <TableTitle items={tableTitle} />
      {!isNotFoundData ? (
        <React.Fragment>
          <TableScroll>
            {!isLoading ? (
              dataLocal.map((item, index) => {
                const directionMenu = index < 4 ? "bottom" : "top";
                return (
                  <TableContent key={item?.id}>
                    <TableItem
                      item={{
                        label: item?.descricao,
                        className: "column__table"
                      }}
                    />
                    <TableItem
                      item={{
                        label: item?.identificacao,
                        className: "column__table"
                      }}
                    />
                    <TableItem
                      item={{
                        label: item?.totalDeAssento,
                        className: "column__table"
                      }}
                    />
                    <TableItem className="size__action">
                      <MenuAction
                        disabled={isAwaitDelete}
                        direction={directionMenu}
                        onDelete={() => {
                          onGetDataDelete({
                            name: item?.descricao,
                            id: Number(item?.id)
                          });
                        }}
                        onEdit={() => {
                          onSendToEdit(Number(item?.id));
                        }}
                      />
                    </TableItem>
                  </TableContent>
                );
              })
            ) : (
              <React.Fragment>
                <MultSkeleton amount={10}>
                  <TableContent>
                    <TableItem className="column__table">
                      <Skeleton />
                    </TableItem>
                    <TableItem className="column__table">
                      <Skeleton />
                    </TableItem>
                    <TableItem className="column__table">
                      <Skeleton />
                    </TableItem>
                    <TableItem className="size__action">
                      <Skeleton width="70%" />
                    </TableItem>
                  </TableContent>
                </MultSkeleton>
              </React.Fragment>
            )}
          </TableScroll>
          <FooterData
            onChangePage={onChangePage}
            onChangeSizePage={onChangeSizePage}
            data={dataPagination}
          />
        </React.Fragment>
      ) : (
        <DataNotFound onAction={onTryAgainGetData} />
      )}
    </ContainerListLocal>
  );
}
