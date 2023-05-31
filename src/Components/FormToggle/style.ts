import { type FormToggleModifier } from "@/_types/FormToggle";
import styled, { css } from "styled-components";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";

const modifier = {
  activated: css`
    .toggle__button {
      background-color: ${colors.SUCCESS};
      .toggle__circle {
        left: 57px;
      }
      .toggle__text {
        right: 50px;
      }
    }
  `,
  disabled: css`
    .toggle__button {
      background-color: ${colors.RED_PRIMARY};
      .toggle__circle {
        left: 5px;
      }
      .toggle__text {
        right: 10px;
      }
    }
  `
};

export const ContainerFormToggle = styled.div<FormToggleModifier>`
  display: flex;
  flex-direction: column;
  .toggle__label {
    font-size: ${pxToRem(16)};
    font-weight: 400;
    color: ${colors.DARK_PRIMARY};
    margin-bottom: 12px;
  }
  .toggle__button {
    width: 100px;
    height: 45px;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 25px;
    position: relative;
    border: transparent;
    :disabled {
      cursor: no-drop;
      opacity: 0.6;
    }
    .center__horizontal {
      position: absolute;
      margin: auto;
      transition: all 0.3s;
      bottom: 0;
      top: 0;
    }
    .toggle__circle {
      display: block;
      width: 38px;
      height: 38px;
      background-color: ${colors.WHITE};
      border-radius: 50%;
    }
    .toggle__text {
      font-size: ${pxToRem(16)};
      font-weight: 400;
      color: ${colors.WHITE};
      width: 45px;
      height: fit-content;
    }
  }
  ${({ isTrue }) => (isTrue ? modifier.activated : modifier.disabled)}
`;

// isTrue;
