import { type ToastAlertModifier } from "@/_types/ToastAlert";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css, keyframes } from "styled-components";

const showAnimation = keyframes`
  0% {
    right: -350px;
  }
  60% {
    right: 70px;
  }
  100% {
    right: 30px;
  }
`;

const modifider = {
  variants: {
    success: css`
      background-color: ${colors.SUCCESS};
    `,
    error: css`
      background-color: ${colors.RED_PRIMARY};
    `,
    info: css`
      background-color: ${colors.BLUE_PRIMARY};
    `,
    warning: css`
      background-color: ${colors.ORANGE_PRIMARY};
    `,
    ghost: css`
      background-color: transparent;
      opacity: 0.2;
    `
  },
  show: {
    visible: css`
      right: 30px;
      animation: ${showAnimation} 0.3s linear;
    `,
    hidden: css`
      right: -350px;
    `
  }
};

export const ContainerToastAlert = styled.div<ToastAlertModifier>`
  position: fixed;
  background-color: white;
  top: 30px;
  padding: 12px 30px;
  border-radius: 12px;
  display: flex;
  column-gap: 16px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  max-width: 320px;
  z-index: 5;
  ${({ variant }) => modifider.variants[variant]};
  ${({ isVisible }) => modifider.show[isVisible ? "visible" : "hidden"]};
  svg {
    width: 50px;
  }
  .alert__texts {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    min-width: 150px;
    .alert__title,
    .alert__description {
      color: ${colors.WHITE};
      font-size: ${pxToRem(16)};
    }
  }
`;
