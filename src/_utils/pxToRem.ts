export function pxToRem(n: number): string {
  const defaultRem = 16;
  return `${n / defaultRem}rem`;
}
