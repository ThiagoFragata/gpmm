import { colors } from "@/style/theme";
import { type ButtonModifier } from "@/_types/Button";
import styled, { css } from "styled-components";
import { pxToRem } from "@/_utils/pxToRem";

const containerButtonModifier = {
  variant: {
    primary: css`
      background-color: ${colors.GREEN_PRIMARY};
      border: 1px solid ${colors.GREEN_DARK};
      color: ${colors.WHITE};
    `,
    outline: css`
      background-color: ${colors.WHITE};
      border: 1px solid ${colors.GREEN_PRIMARY};
      color: ${colors.GREEN_PRIMARY};
    `,
    danger: css`
      background-color: ${colors.RED_PRIMARY};
      border: 1px solid ${colors.RED_DARK};
      color: ${colors.WHITE};
    `,
    ghost: css`
      background-color: transparent;
      border: 2px solid ${colors.GRAY_LIGHT};
      color: ${colors.GRAY_SECONDARY};
    `,
    light: css`
      background-color: ${colors.BLUE_PRIMARY};
      border: 2px solid ${colors.BLUE_DARK};
      color: ${colors.WHITE};
    `
  }
};

export const ContainerButton = styled.button<ButtonModifier>`
  ${({ variant }) => css`
    border: none;
    padding: 10px 24px;
    border-radius: 12px;
    transition: all 0.3s;
    font-size: ${pxToRem(16)};
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 6px;
    :hover {
      transform: translateY(-3px);
      cursor: pointer;
    }
    :disabled {
      opacity: 0.5;
      transform: translateY(0);
      cursor: default;
    }
    .button__icon {
      width: 18px;
      height: 18px;
      path {
        fill: currentColor;
      }
    }
    ${containerButtonModifier.variant[variant]};
  `}
`;
