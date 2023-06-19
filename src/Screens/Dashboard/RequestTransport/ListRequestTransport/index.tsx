import React from "react";
import { ContainerListRequestTransport } from "./style";
import { useListRequestTransport } from "./useListRequestTransport";
import {
  Button,
  DataNotFound,
  FooterData,
  MenuAction,
  MultSkeleton,
  Skeleton,
  StatusRequest,
  TableContent,
  TableItem,
  TableScroll,
  TableTitle
} from "@/Components";
import { PATHS } from "@/_utils/constants";
import { formatDataStartEnd } from "@/_utils/masks";
import { ShowDetailsRequestTransport } from "./Partials/ShowDetailsRequestTransport";

export function ListRequestTransport(): JSX.Element {
  const {
    dataRequestTransport,
    tableTitle,
    isLoading,
    isNotFoundData,
    dataPagination,
    isOpenShowDetails,
    dataShowRequestTransport,
    shouldRenderEditOption,
    onCloseDetails,
    onGetDataShowDetails,
    onSendToEdit,
    onChangeSizePage,
    onChangePage,
    onTryAgainGetData
  } = useListRequestTransport();
  return (
    <ContainerListRequestTransport>
      <ShowDetailsRequestTransport
        isOpen={isOpenShowDetails}
        onClose={onCloseDetails}
        data={dataShowRequestTransport}
      />
      <div className="top__options">
        <span />
        <Button
          title="Novo"
          iconName="MoreIcon"
          navigateTo={PATHS.dashboard.solicitacoesNovoTranporte}
        />
      </div>
      <TableTitle items={tableTitle} />
      {!isNotFoundData ? (
        <React.Fragment>
          <TableScroll>
            {!isLoading ? (
              dataRequestTransport.map((item, index) => {
                const directionMenu = index < 4 ? "bottom" : "top";
                return (
                  <TableContent key={item?.id}>
                    <TableItem
                      item={{
                        label: item?.solicitacao?.finalidade,
                        className: "column__table"
                      }}
                    />
                    <TableItem
                      item={{
                        label: formatDataStartEnd({
                          start: item?.solicitacao?.dataInicio,
                          end: item?.solicitacao?.dataFinal
                        }),
                        className: "column__table"
                      }}
                    />
                    <TableItem
                      item={{
                        label: `${item?.saida} - ${item?.destino}`,
                        className: "column__partida"
                      }}
                    />
                    <TableItem className="column__status">
                      <StatusRequest type={item?.solicitacao.autorizacao} />
                    </TableItem>
                    <TableItem className="size__action">
                      <MenuAction
                        direction={directionMenu}
                        onShowDetails={() => {
                          onGetDataShowDetails(item);
                        }}
                        onEdit={
                          shouldRenderEditOption
                            ? () => {
                                onSendToEdit(Number(item?.id));
                              }
                            : undefined
                        }
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
                    <TableItem className="column__partida">
                      <Skeleton />
                    </TableItem>
                    <TableItem className="column__status">
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
    </ContainerListRequestTransport>
  );
}
