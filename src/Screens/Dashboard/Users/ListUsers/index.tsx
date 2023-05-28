import React from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import type { typeStatus } from "@/_types/Status";
import { ContainerListUsers } from "./style";
import {
  BreadCrumb,
  Button,
  DataBox,
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
  const { breadCrumb, tableTitle } = useListUsers();
  const fakeData = [
    {
      name: "Maria da Silva",
      email: "maria.silva@email.com",
      SIAPE: "8.507.242-0",
      phone: "(92) 99345-8416",
      status: "active",
      link: "Professor"
    },
    {
      name: "João da Costa",
      email: "joao.costa@email.com",
      SIAPE: "1.234.567-8",
      phone: "(21) 91234-5678",
      status: "inactive",
      link: "Tecnico"
    },
    {
      name: "Ana Luiza Santos",
      email: "ana.luiza.santos@email.com",
      SIAPE: "6.543.210-9",
      phone: "(31) 99876-5432",
      status: "waiting",
      link: "Professor"
    },
    {
      name: "Pedro Henrique Almeida",
      email: "pedro.henrique.almeida@email.com",
      SIAPE: "3.456.789-0",
      phone: "(19) 98765-4321",
      status: "active",
      link: "Tecnico"
    },
    {
      name: "Luciana Oliveira",
      email: "luciana.oliveira@email.com",
      SIAPE: "9.876.543-2",
      phone: "(11) 95432-1876",
      status: "inactive",
      link: "Professor"
    },
    {
      name: "Rafaela Santos",
      email: "rafaela.santos@email.com",
      SIAPE: "2.345.678-9",
      phone: "(51) 98234-5678",
      status: "waiting",
      link: "Tecnico"
    },
    {
      name: "Fernando Costa",
      email: "fernando.costa@email.com",
      SIAPE: "4.567.890-1",
      phone: "(81) 91234-5678",
      status: "active",
      link: "Professor"
    },
    {
      name: "Luiz Carlos Silva",
      email: "luiz.carlos.silva@email.com",
      SIAPE: "5.678.901-2",
      phone: "(71) 98765-4321",
      status: "inactive",
      link: "Tecnico"
    },
    {
      name: "Aline Rodrigues",
      email: "aline.rodrigues@email.com",
      SIAPE: "7.890.123-4",
      phone: "(62) 99876-5432",
      status: "waiting",
      link: "Professor"
    },
    {
      name: "Roberto Oliveira",
      email: "roberto.oliveira@email.com",
      SIAPE: "0.123.456-7",
      phone: "(27) 95432-1876",
      status: "active",
      link: "Tecnico"
    },
    {
      name: "Renata Souza",
      email: "renata.souza@email.com",
      SIAPE: "8.901.234-5",
      phone: "(41) 98234-5678",
      status: "inactive",
      link: "Professor"
    }
  ];

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
        <TableScroll>
          {fakeData.map((item, index) => {
            const directionMenu = index < 4 ? "bottom" : "top";
            return (
              <TableContent key={index}>
                <TableItem className="size__name">
                  <div className="table__user">
                    <p className="user__name">{item?.name}</p>
                    <p className="user__email">{item?.email}</p>
                  </div>
                </TableItem>
                <TableItem
                  item={{ label: item?.SIAPE, className: "size__siape" }}
                />
                <TableItem
                  item={{ label: item?.phone, className: "size__phone" }}
                />
                <TableItem className="size__status">
                  <Status type={item?.status as typeStatus} />
                </TableItem>
                <TableItem
                  item={{ label: item?.link, className: "size__link" }}
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
        <FooterData />
      </DataBox>
    </ContainerListUsers>
  );
};
