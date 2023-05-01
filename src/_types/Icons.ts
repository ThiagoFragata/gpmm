export interface DefaultIconPros {
  fill?: string;
  className?: string;
}

export type ArrowIconPros = {
  direction?: "left" | "right" | "top" | "bottom";
} & DefaultIconPros;
