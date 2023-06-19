import React from "react";
import { ContainerList } from "./style";
import { type ListProps } from "@/_types/Sectors/ListSectors";
import {
  TableContent,
  TableItem,
  TableScroll,
  TableTitle
} from "@/Components/Table";
import { DataNotFound } from "@/Components/DataNotFound";
import { MultSkeleton, Skeleton } from "@/Components/Skeleton";
import { MenuAction } from "@/Components/MenuAction";

export function List({
  dataSector,
  isNotFoundData,
  isLoading,
  tableTitle,
  isAwaitDelete,
  onGetDataDelete,
  onSelectSector
}: ListProps): JSX.Element {
  return (
    <React.Fragment>
      <ContainerList>
        <TableTitle className="list__title-table" items={tableTitle} />
        {!isNotFoundData ? (
          <React.Fragment>
            <TableScroll>
              {!isLoading ? (
                dataSector.map((item, index) => {
                  const directionMenu = index < 4 ? "bottom" : "top";
                  return (
                    <TableContent key={item?.id}>
                      <TableItem className="column__table">
                        <button
                          type="button"
                          className="column__button"
                          onClick={() => {
                            onSelectSector({
                              setor: Number(item?.id),
                              label_setor: item?.nome
                            });
                          }}
                        >
                          {item?.nome}
                        </button>
                      </TableItem>
                      <TableItem className="size__action">
                        <MenuAction
                          isShadow={false}
                          disabled={isAwaitDelete}
                          direction={directionMenu}
                          onDelete={() => {
                            onGetDataDelete({
                              name: item?.nome,
                              id: Number(item?.id)
                            });
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
                      <TableItem className="size__action">
                        <Skeleton width="70%" />
                      </TableItem>
                    </TableContent>
                  </MultSkeleton>
                </React.Fragment>
              )}
            </TableScroll>
          </React.Fragment>
        ) : (
          <DataNotFound />
        )}
      </ContainerList>
    </React.Fragment>
  );
}
