import React from "react";
import type { BreadCrumbProps } from "@/_types/BreadCrumb";
import { ContainerBreadCrumb } from "./style";
import { ArrowIcon } from "@/assets/icons";
import Link from "next/link";

export function BreadCrumb({ items }: BreadCrumbProps): JSX.Element {
  return (
    <ContainerBreadCrumb>
      {items.map((item, index) => {
        const isNoLink = item?.destiny === undefined;
        const isLastItem = index === items.length - 1;
        const classContrast = isLastItem
          ? "breadcrumb__item--last"
          : "breadcrumb__item--normal";
        return (
          <React.Fragment key={index}>
            {isNoLink ? (
              <p className={`breadcrumb__item ${classContrast}`}>
                {item?.label}
              </p>
            ) : (
              <Link
                className={`breadcrumb__item breadcrumb__item--link ${classContrast}`}
                href={item?.destiny ?? "#"}
              >
                {item?.label}
              </Link>
            )}
            <ArrowIcon className="breadcrumb__icon" />
          </React.Fragment>
        );
      })}
    </ContainerBreadCrumb>
  );
}
