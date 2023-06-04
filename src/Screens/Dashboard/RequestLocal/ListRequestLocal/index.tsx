import React from "react";
import { ContainerListRequestLocal } from "./style";
import { useListRequestLocal } from "./useListRequestLocal";
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

export function ListRequestLocal(): JSX.Element {
  const {
    onTryAgainGetData,
    onHandlerDialogModal,
    onGetDataDelete,
    onConfirmDelete,
    onSendToEdit,
    onChangePage,
    onChangeSizePage,
    formatDataStartEnd,
    dataPagination,
    dataDelete,
    isOpenModal,
    isNotFoundData,
    tableTitle,
    dataRequestLocal,
    isLoading,
    isAwaitDelete
  } = useListRequestLocal();
  return (
    <ContainerListRequestLocal>
      <AwaitRequest isVisible={isAwaitDelete} />
      {/* <DialogModal
        title={`Deseja realmente excluir o local ${dataDelete.name}?`}
        description="Ao realizar está ação, o item não poderá ser recuperado."
        isOpen={isOpenModal}
        titleActionCancel="Não"
        titleActionConfirm="Sim"
        onActionConfirm={onConfirmDelete}
        ocActionCancel={onHandlerDialogModal}
        variant="danger"
      /> */}
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
              dataRequestLocal.map((item, index) => {
                const directionMenu = index < 4 ? "bottom" : "top";
                return (
                  <TableContent key={item?.solicitacao_id}>
                    <TableItem
                      item={{
                        label: item?.finalidade,
                        className: "column__table"
                      }}
                    />
                    <TableItem
                      item={{
                        label: formatDataStartEnd({
                          start: item?.data_inicio,
                          end: item?.data_final
                        }),
                        className: "column__table"
                      }}
                    />
                    <TableItem
                      item={{
                        label: item?.solicitante,
                        className: "column__table"
                      }}
                    />
                    <TableItem
                      item={{
                        label: `${item?.local} - ${item?.identificacao}`,
                        className: "column__table"
                      }}
                    />
                    <TableItem className="size__action">
                      <MenuAction
                        disabled={isAwaitDelete}
                        direction={directionMenu}
                        onShowDetails={() => {
                          alert("ver detalhes");
                        }}
                        // onDelete={() => {
                        // onGetDataDelete({
                        // name: item?.,
                        // id: Number(item?.id)
                        // });
                        // }}
                        // onEdit={() => {
                        // onSendToEdit(Number(item?.id));
                        // }}
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
          {/* <FooterData
            onChangePage={onChangePage}
            onChangeSizePage={onChangeSizePage}
            data={dataPagination}
          /> */}
        </React.Fragment>
      ) : (
        <DataNotFound onAction={onTryAgainGetData} />
      )}
    </ContainerListRequestLocal>
  );
}
