import React from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import type { typeStringStatus } from "@/_types/Status";
import { ContainerListUsers } from "./style";
import {
  BreadCrumb,
  Button,
  DataBox,
  DataNotFound,
  FooterData,
  MenuAction,
  Search,
  Status,
  TableContent,
  TableItem,
  TableScroll,
  TableTitle
} from "@/Components";
import { useListUsers } from "./useListUsers";
import { PATHS } from "@/_utils/constants";

export const ListUsers: NextPageWithLayout = () => {
  const {
    dataUsers,
    tableTitle,
    breadCrumb,
    isLoading,
    isNotFoundData,
    isOpenModal,
    dataDelete,
    isAwaitDelete,
    dataPagination,
    onTryAgainGetData,
    onChangePage,
    onChangeSizePage
  } = useListUsers();

  return (
    <ContainerListUsers>
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <div className="top__options">
          <Search />
          <Button
            title="Novo"
            iconName="MoreIcon"
            navigateTo={PATHS.dashboard.usuarioNovo}
          />
        </div>
        <TableTitle items={tableTitle} />
        {!isNotFoundData ? (
          <React.Fragment>
            <TableScroll>
              {dataUsers.map((item, index) => {
                const directionMenu = index < 4 ? "bottom" : "top";
                return (
                  <TableContent key={index}>
                    <TableItem className="size__name">
                      <div className="table__user">
                        <p className="user__name">{item?.nome}</p>
                        <p className="user__email">{item?.email}</p>
                      </div>
                    </TableItem>
                    <TableItem
                      item={{ label: item?.siape, className: "size__siape" }}
                    />
                    <TableItem
                      item={{
                        label: item?.telefone.numero,
                        className: "size__phone"
                      }}
                    />
                    <TableItem className="size__status">
                      <Status type={item?.status as typeStringStatus} />
                    </TableItem>
                    <TableItem
                      item={{
                        label: item?.setor?.nome,
                        className: "size__link"
                      }}
                    />
                    <TableItem className="size__action">
                      <MenuAction
                        direction={directionMenu}
                        onDelete={() => {
                          alert("onDelete");
                        }}
                        onEdit={() => {
                          alert("onEdit");
                        }}
                        onShowDetails={() => {
                          alert("onShowDetails");
                        }}
                      />
                    </TableItem>
                  </TableContent>
                );
              })}
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
      </DataBox>
    </ContainerListUsers>
  );
};
