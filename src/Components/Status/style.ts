import type { StatusModifier } from "@/_types/Status";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

const modifier = {
  active: css`
    background-color: ${colors.SUCCESS};
    border: 1px solid ${colors.GREEN_PRIMARY};
  `,
  waiting: css`
    background-color: ${colors.BLUE_PRIMARY};
    border: 1px solid ${colors.BLUE_DARK};
  `,
  inactive: css`
    background-color: ${colors.RED_PRIMARY};
    border: 1px solid ${colors.RED_DARK};
  `
};

export const ContainerStatus = styled.div<StatusModifier>`
  ${({ type }) => modifier[type]};
  border-radius: 16px;
  padding: 5px 10px;
  width: fit-content;
  .status__label {
    color: ${colors.WHITE};
    font-size: ${pxToRem(14)};
  }
`;
