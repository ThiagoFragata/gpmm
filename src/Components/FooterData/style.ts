import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

export const ContainerFooterData = styled.div`
  padding: 16px 0 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.GRAY_PRIMARY};
  .footer__text {
    font-size: ${pxToRem(14)};
    font-weight: 400;
    color: ${colors.GRAY_SECONDARY};
    .footer__text--contrast {
      color: ${colors.GRAY_PRIMARY};
    }
  }
  .footer__count,
  .footer__pagination {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
  .footer__pagination {
    .footer__control {
      display: flex;
      align-items: center;
      column-gap: 8px;
    }
  }
`;

export const modifierNumbers = {
  open: css`
    .numbers__popup {
      box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.25);
      max-height: 30vh;
      padding: 4px;
    }
    .number__current {
      .current__icon {
        transform: rotate(-90deg) !important;
      }
    }
  `,
  close: css`
    .numbers__popup {
      max-height: 0;
    }
  `
};

export const ContainerNumbers = styled.div<{ isOpen: boolean }>`
  position: relative;
  .numbers__popup {
    border-radius: 4px;
    background-color: ${colors.WHITE};
    display: flex;
    flex-direction: column;
    position: absolute;
    transition: all 0.2s;
    width: 100%;
    overflow: hidden;
    bottom: 38px;
    z-index: 2;
    .numbers__option {
      padding: 4px 10px;
      border-radius: 4px;
      background-color: ${colors.WHITE};
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.3s;
      text-align: left;
      color: ${colors.GRAY_SECONDARY};
      :hover {
        background-color: ${colors.BACKGROUND_PRIMARY};
      }
    }
  }
  .number__current {
    display: flex;
    align-items: center;
    column-gap: 16px;
    background-color: transparent;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid ${colors.GRAY_SECONDARY};
    cursor: pointer;
    transition: all 0.3s;
    :hover {
      background-color: ${colors.BACKGROUND_PRIMARY};
    }
    .current__icon {
      transition: all 0.3s;
    }
  }

  ${({ isOpen }) => modifierNumbers[isOpen ? "open" : "close"]};
`;
