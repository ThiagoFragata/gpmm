import type { TextInputModifier } from "@/_types/TextInput";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

const modifier = {
  default: css`
    .input__text {
      color: ${colors.DARK_PRIMARY};
      border: 1px solid ${colors.GRAY_PRIMARY};
      :focus {
        border: 1px solid ${colors.GREEN_PRIMARY};
      }
    }
  `,
  error: css`
    .input__text {
      color: ${colors.RED_PRIMARY};
      border: 1px solid ${colors.RED_PRIMARY};
      :focus {
        border: 1px solid ${colors.RED_PRIMARY};
      }
    }
  `
};

const modifierTypeInput = {
  default: css``,
  hidden: css`
    padding: 0;
    height: 0;
    width: 0;
    .container__input .input__text {
      padding: 0;
      margin: 0;
      border: none;
    }
  `
};

export const ContainerTextInput = styled.div<TextInputModifier>`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  position: relative;
  width: 100%;
  height: fit-content;
  .input__label {
    font-size: ${pxToRem(16)};
    color: ${colors.DARK_PRIMARY};
    font-weight: 400;
    margin-bottom: 14px;
  }
  .container__input {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    display: flex;
    position: relative;
    height: 45px;
    .input__text {
      padding: 0 12px;
      font-size: ${pxToRem(16)};
      border-radius: 12px;
      transition: all 0.3s;
      width: 100%;
      color: ${colors.DARK_PRIMARY};
      ::placeholder {
        color: ${colors.GRAY_PRIMARY};
      }
      :disabled {
        opacity: 0.5;
      }
    }
  }
  ${({ error }) => modifier[error ? "error" : "default"]};
  ${({ isHidden }) => modifierTypeInput[isHidden ? "hidden" : "default"]};
`;

const modifiersWarning = {
  valid: css`
    opacity: 0;
  `,
  invalid: css`
    opacity: 1;
  `
};

export const TextWarning = styled.span<{ show: boolean }>`
  bottom: -14px;
  position: absolute;
  transition: all 0.4s;
  color: ${colors.RED_PRIMARY};
  font-weight: 400;
  font-size: ${pxToRem(13)};
  height: 25px;
  ${({ show }) => modifiersWarning[show ? "invalid" : "valid"]}
`;
