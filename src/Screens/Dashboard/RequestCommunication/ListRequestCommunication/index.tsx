import React, { Fragment } from "react";
import { ContainerListRequestCommunication } from "./style";
import { useListRequestCommunication } from "./useListRequestCommunication";
import {
  Button,
  DataNotFound,
  FooterData,
  MultSkeleton,
  Skeleton,
  TableContent,
  TableItem,
  TableScroll,
  TableTitle
} from "@/Components";
import { PATHS } from "@/_utils/constants";
import moment from "moment";

export function ListRequestCommunication(): JSX.Element {
  const {
    tableTitle,
    dataCommunication,
    dataPagination,
    isNotFoundData,
    isLoading,
    onTryAgainGetData,
    onChangeSizePage,
    onChangePage
  } = useListRequestCommunication();

  return (
    <ContainerListRequestCommunication>
      <div className="top__options">
        <span />
        <Button
          title="Novo"
          iconName="MoreIcon"
          navigateTo={PATHS.dashboard.solicitacoesNovaComunicacao}
        />
      </div>
      <TableTitle items={tableTitle} />
      {!isNotFoundData ? (
        <React.Fragment>
          <TableScroll>
            {!isLoading ? (
              dataCommunication.map((item, index) => (
                <TableContent key={item?.id}>
                  <TableItem className="column__user">
                    <div className="table__user">
                      <p className="user__name">{item?.pessoa?.nome}</p>
                      <p className="user__email">{item?.pessoa?.email}</p>
                    </div>
                  </TableItem>
                  <TableItem
                    item={{
                      label:
                        item?.dataEnvio !== null &&
                        item?.dataEnvio !== undefined
                          ? moment(
                              item?.dataEnvio,
                              "DD-MM-YYYY HH:mm:ss"
                            ).format("DD[/]MM[/]YYYY")
                          : "Informação indisponível no momento",
                      className: "column__data"
                    }}
                  />
                  <TableItem
                    item={{
                      label: item?.assunto,
                      className: "column__object"
                    }}
                  />
                  <TableItem
                    item={{
                      label: item?.mensagem,
                      className: "column__message"
                    }}
                  />
                </TableContent>
              ))
            ) : (
              <React.Fragment>
                <MultSkeleton amount={10}>
                  <TableContent>
                    <TableItem className="column__user">
                      <div className="table__user--loading">
                        <Skeleton width="60%" />
                        <Skeleton />
                      </div>
                    </TableItem>
                    <TableItem className="column__data">
                      <Skeleton />
                    </TableItem>
                    <TableItem className="column__object">
                      <Skeleton />
                    </TableItem>
                    <TableItem className="column__message">
                      <Skeleton />
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
    </ContainerListRequestCommunication>
  );
}
