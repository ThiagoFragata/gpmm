import { type InputSelectModifier } from "@/_types/InputSelect";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

export const modifier = {
  error: css`
    .view__text {
      border: 1px solid ${colors.RED_PRIMARY};
    }
  `,
  placeholder: css`
    .input__text {
      color: ${colors.GRAY_PRIMARY};
      opacity: 0.6;
    }
  `,
  showDatas: {
    visible: css`
      max-height: 300px;
      opacity: 1;
      box-shadow: 1px 0px 4px 2px rgb(0 0 0 / 25%);
    `,
    hidden: css`
      max-height: 0;
      opacity: 0.5;
      top: 50px;
      overflow: hidden;
    `,
    direction: {
      top: css`
        bottom: 0;
      `,
      center: css`
        top: -90%;
      `,
      bottom: css`
        top: 26px;
      `
    }
  }
};

export const ContainerInputSelect = styled.div<InputSelectModifier>`
  ${({ error, isPlaceholder }) => css`
    position: relative;
    .input__label {
      display: block;
      font-size: ${pxToRem(16)};
      font-weight: 400;
      color: ${colors.DARK_PRIMARY};
      margin-bottom: 14px;
    }
    .view__text {
      border-radius: 12px;
      transition: all 0.3s;
      padding: 0 12px;
      align-items: center;
      display: flex;
      border: 1px solid ${colors.GRAY_PRIMARY};
      outline: transparent;
      height: 45px;
      width: 100%;
      cursor: context-menu;
      background-color: transparent;
      .input__text {
        font-size: ${pxToRem(16)};
        color: ${colors.DARK_PRIMARY};
      }
      :focus {
        outline: 1px solid ${colors.GREEN_PRIMARY};
      }
      :disabled {
        cursor: no-drop;
        opacity: 0.5;
      }
    }
    ${error && modifier.error};
    ${isPlaceholder && modifier.placeholder};
  `}
`;
