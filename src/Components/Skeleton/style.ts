import type { SkeletonModifier } from "@/_types/Skeleton";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { keyframes } from "styled-components";

const reflexAnimation = keyframes`
  0% {
    left: -38%;

  }
  100% {
    left: 110%;
  }
`;

export const ContainerSkeleton = styled.div<SkeletonModifier>`
  height: ${({ height }) => pxToRem(height ?? 20)};
  width: ${({ width }) => width ?? "50%"};
  background-color: ${colors.GRAY_LIGHT};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  ::before {
    animation: ${reflexAnimation} 1s linear infinite;
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 50px;
    width: 35%;
    background-color: ${colors.WHITE};
    filter: blur(5px);
    opacity: 0.4;
    border-radius: 2px;
    transform: rotate(15deg);
  }
`;
