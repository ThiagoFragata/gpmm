import React from "react";
import { ContainerSkeleton } from "./style";
import type { MultSkeletonProps, SkeletonProps } from "@/_types/Skeleton";

export function MultSkeleton({
  amount,
  children
}: MultSkeletonProps): JSX.Element {
  const items = new Array(amount).fill("");
  return (
    <React.Fragment>
      {items.map((_, index) => (
        <React.Fragment key={index}>{children}</React.Fragment>
      ))}
    </React.Fragment>
  );
}

export function Skeleton({ width, height }: SkeletonProps): JSX.Element {
  return <ContainerSkeleton width={width} height={height} />;
}
