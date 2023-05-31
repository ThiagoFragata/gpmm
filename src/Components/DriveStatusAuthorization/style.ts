import { type DriveStatusAuthorizationModifier } from "@/_types/DriveStatusAuthorization";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

const modifier = {
  authorized: css`
    border: 1px solid ${colors.SUCCESS};
    .icon {
      background-color: ${colors.SUCCESS};
    }
  `,
  denied: css`
    border: 1px solid ${colors.RED_PRIMARY};
    .icon {
      background-color: ${colors.RED_PRIMARY};
    }
  `
};

export const ContainerDriveStatusAuthorization = styled.div<DriveStatusAuthorizationModifier>`
  ${({ authorization }) => modifier[authorization ? "authorized" : "denied"]};
  padding: 16px;
  border-radius: 16px;
  display: flex;
  column-gap: 16px;
  .icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    svg path {
      fill: ${colors.WHITE};
    }
  }
  .status {
    font-size: ${pxToRem(16)};
    font-weight: 400;
    color: ${colors.DARK_PRIMARY};
  }
  .description {
    margin-top: 6px;
    font-size: ${pxToRem(16)};
    color: ${colors.GRAY_SECONDARY};
  }
`;
