import { type MenuActionModifier } from "@/_types/MenuAction";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

const modifier = {
  position: {
    top: css`
      bottom: 0px;
    `,
    bottom: css`
      top: 0px;
    `
  },
  state: {
    open: css`
      z-index: 1;
      right: 17px;
    `,
    close: css`
      overflow: hidden;
      top: 0;
      bottom: 0;
      margin: auto;
      padding: 0;
      max-width: 0;
      max-height: 0;
    `
  }
};

export const ContainerMenuAction = styled.div`
  position: relative;
  .action__button {
    :hover {
      background-color: ${colors.GRAY_LIGHT};
    }
  }
`;

export const ContainerMenuOptions = styled.div<MenuActionModifier>`
  right: 0px;
  background-color: ${colors.WHITE};
  padding: 16px;
  box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  position: absolute;
  transition: all 0.2s;
  ${({ direction }) => modifier.position[direction ?? "top"]};
  ${({ isOpen }) => modifier.state[isOpen ? "open" : "close"]};
  .option__button {
    display: flex;
    align-items: center;
    column-gap: 6px;
    border-radius: 4px;
    transition: all 0.2s;
    border: 1px solid transparent;
    padding: 6px 12px;
    color: ${colors.GRAY_SECONDARY};
    font-size: ${pxToRem(14)};
    background: transparent;
    width: 100%;
    cursor: pointer;
    .button__svg path {
      transition: all 0.2s;
      fill: ${colors.GRAY_SECONDARY};
    }
  }
  .option__button--show {
    :hover {
      color: ${colors.GREEN_PRIMARY};
      border: 1px solid ${colors.GREEN_PRIMARY};
      .button__svg path {
        fill: ${colors.GREEN_PRIMARY};
      }
    }
  }
  .option__button--edit {
    :hover {
      color: ${colors.BLUE_PRIMARY};
      border: 1px solid ${colors.BLUE_PRIMARY};
      .button__svg path {
        fill: ${colors.BLUE_PRIMARY};
      }
    }
  }
  .option__button--delete {
    :hover {
      color: ${colors.RED_PRIMARY};
      border: 1px solid ${colors.RED_PRIMARY};
      .button__svg path {
        fill: ${colors.RED_PRIMARY};
      }
    }
  }
`;
