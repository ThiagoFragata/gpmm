import styled, { css, keyframes } from "styled-components";
import { colors } from "@/style/theme";

const handlerSizeShow = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

const modifier = {
  showAnimation: css`
    animation: ${handlerSizeShow} 3s ease-in-out infinite;
    height: 6px;
  `,
  hiddenAnimation: css`
    height: 0;
  `
};

export const ContainerAwaitRequest = styled.div<{ isVisible: boolean }>`
  border-radius: 0 5px 5px 0;
  background-color: ${colors.GREEN_PRIMARY};
  position: fixed;
  transition: all 0.2s;
  top: 0;
  left: 0;
  z-index: 3;
  ${({ isVisible }) =>
    modifier[isVisible ? "showAnimation" : "hiddenAnimation"]}
`;
