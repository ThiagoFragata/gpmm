import React from "react";
import {
  ContainerTable,
  ContainerTableContent,
  ContainerTableItem,
  ContainerTableScroll
} from "./style";
import type {
  TableTitleProps,
  TableContentProps,
  TableItemProps,
  TableScrollProps
} from "@/_types/Table";

export function TableTitle({ className, items }: TableTitleProps): JSX.Element {
  return (
    <ContainerTable className={className}>
      {items.map((item, index) => (
        <li className={`table__title ${item.className ?? ""}`} key={index}>
          {item?.label}
        </li>
      ))}
    </ContainerTable>
  );
}

export function TableContent({
  className,
  children
}: TableContentProps): JSX.Element {
  return (
    <ContainerTableContent className={className}>
      {children}
    </ContainerTableContent>
  );
}

export function TableItem({
  className,
  item,
  children,
  loading
}: TableItemProps): JSX.Element {
  const shouldRenderLabel = item !== undefined;
  const shouldRenderChildren = children !== undefined;
  const shouldRenderLoading = loading !== undefined;
  return !shouldRenderLoading ? (
    shouldRenderLabel ? (
      <ContainerTableItem
        className={`${className ?? ""} ${item?.className ?? ""}`}
      >
        {shouldRenderLabel && <p className="table__text">{item?.label}</p>}
      </ContainerTableItem>
    ) : (
      <React.Fragment>
        {shouldRenderChildren && (
          <ContainerTableItem className={className}>
            {children}
          </ContainerTableItem>
        )}
      </React.Fragment>
    )
  ) : (
    <React.Fragment>{loading}</React.Fragment>
  );
}

export function TableScroll({ children }: TableScrollProps): JSX.Element {
  return (
    <ContainerTableScroll>
      <div className="scroll__box">{children}</div>
    </ContainerTableScroll>
  );
}
