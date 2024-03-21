import {
  AwaitRequest,
  Button,
  DataNotFound,
  DialogModal,
  FooterData,
  MenuAction,
  MultSkeleton,
  Select,
  Skeleton,
  TableContent,
  TableItem,
  TableScroll,
  TableTitle
} from "@/Components";
import { PATHS } from "@/_utils/constants";
import React from "react";
import { ShowDetailsRequestLocal } from "./Partials/ShowDetails";
import { ContainerListRequestLocal } from "./style";
import { useListRequestLocal } from "./useListRequestLocal";

export function ListRequestLocal({
  isCurrentTab
}: {
  isCurrentTab: boolean;
}): JSX.Element {
  const {
    onTryAgainGetData,
    onHandlerDialogModal,
    onGetDataDelete,
    onConfirmDelete,
    onSendToEdit,
    onChangePage,
    onChangeSizePage,
    formatDataStartEnd,
    onGetDataShowDetails,
    onCloseDetails,
    dataShowRequestLocal,
    isOpenShowDetails,
    dataPagination,
    dataDelete,
    isOpenModal,
    isNotFoundData,
    tableTitle,
    dataRequestLocal,
    isLoading,
    isAwaitDelete,
    setSort
  } = useListRequestLocal({ isCurrentTab });
  return (
    <ContainerListRequestLocal>
      <AwaitRequest isVisible={isAwaitDelete} />
      <ShowDetailsRequestLocal
        isOpen={isOpenShowDetails}
        data={dataShowRequestLocal}
        onClose={onCloseDetails}
      />
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
        <Select
          options={[
            { value: "asc", label: "Crescente" },
            { value: "desc", label: "Decrescente" }
          ]}
          onChange={(selectedValue: string) => {
            setSort(selectedValue);
          }}
        />

        <Button
          title="Novo"
          iconName="MoreIcon"
          navigateTo={PATHS.dashboard.solicitacoesNovoLocal}
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
                          onGetDataShowDetails(item);
                        }}
                        onDelete={() => {
                          onGetDataDelete({
                            name: item?.identificacao,
                            id: Number(item?.identificacao)
                          });
                        }}
                        onEdit={() => {
                          onSendToEdit(Number(item?.identificacao));
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
    </ContainerListRequestLocal>
  );
}
