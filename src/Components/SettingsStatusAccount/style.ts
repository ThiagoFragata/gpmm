import { type SettingsStatusAccountModifier } from "@/_types/SettingsStatusAccount";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

const modifier = {
  status: {
    PENDENTE_ATIVACAO_USUARIO: css`
      display: flex;
      background-color: #fff8e6;
      .status__header {
        border-bottom-color: ${colors.ORANGE_PRIMARY};
        .status__circle {
          background-color: ${colors.ORANGE_PRIMARY};
        }
        .status__title {
          color: ${colors.ORANGE_PRIMARY};
        }
      }
    `,
    PENDENTE_ATIVACAO_ADMIN: css`
      display: flex;
      background-color: #e2f9fd;
      .status__header {
        border-bottom-color: ${colors.BLUE_PRIMARY};
        .status__circle {
          background-color: ${colors.BLUE_PRIMARY};
        }
        .status__title {
          color: ${colors.BLUE_PRIMARY};
        }
      }
    `,
    DESATIVADA: css`
      display: flex;
      background-color: #fdeaeb;
      .status__header {
        border-bottom-color: ${colors.RED_PRIMARY};
        .status__circle {
          background-color: ${colors.RED_PRIMARY};
        }
        .status__title {
          color: ${colors.RED_PRIMARY};
        }
      }
    `,
    ATIVADA: css`
      display: flex;
      background-color: #e8faf5;
      .status__header {
        border-bottom-color: ${colors.SUCCESS};
        .status__circle {
          background-color: ${colors.SUCCESS};
        }
        .status__title {
          color: ${colors.SUCCESS};
        }
      }
    `,
    unknow: css`
      display: none;
    `
  }
};
export const ContainerSettingsStatusAccount = styled.div<SettingsStatusAccountModifier>`
  ${({ status }) => modifier.status[status]};
  padding: 16px 20px;
  border-radius: 12px;
  flex-direction: column;
  row-gap: 12px;
  .status__header {
    display: flex;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding-bottom: 6px;
    column-gap: 12px;
    align-items: center;
    .status__circle {
      width: 40px;
      height: 40px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg path {
        fill: ${colors.WHITE};
      }
    }
    .status__title {
      font-size: ${pxToRem(18)};
      font-weight: 700;
    }
  }
  .status__description {
    color: ${colors.DARK_PRIMARY};
    font-size: ${pxToRem(16)};
  }
  .status__button {
    width: fit-content;
  }
`;
