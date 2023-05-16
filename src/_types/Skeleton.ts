export interface SkeletonProps {
  width?: string;
  height?: number;
}

export type SkeletonModifier = Pick<SkeletonProps, "width" | "height">;

export interface MultSkeletonProps {
  amount: number;
  children: JSX.Element | JSX.Element[];
}
