import React from "react";
import { ContainerListLocal } from "./style";
import { useListLocal } from "./useListLocal";
import {
  Button,
  FooterData,
  MenuAction,
  MultSkeleton,
  Search,
  Skeleton,
  TableContent,
  TableItem,
  TableScroll,
  TableTitle
} from "@/Components";

export function ListLocal(): JSX.Element {
  const { tableTitle, dataLocal, isLoading } = useListLocal();
  return (
    <ContainerListLocal>
      <div className="top__options">
        <Search />
        <Button title="Novo" iconName="MoreIcon" />
      </div>
      <TableTitle items={tableTitle} />
      <TableScroll>
        {!isLoading ? (
          [...dataLocal, ...dataLocal, ...dataLocal, ...dataLocal, ...dataLocal]
            .slice(0, 10)
            .map((item, index) => {
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
                      direction={directionMenu}
                      onDelete={() => {
                        alert("onDelete");
                      }}
                      onEdit={() => {
                        alert("onDelete");
                      }}
                      onShowDetails={() => {
                        alert("onShowDetails");
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
      <FooterData />
    </ContainerListLocal>
  );
}
