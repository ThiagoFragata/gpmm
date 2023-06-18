import { type ListSectorsModifier } from "@/_types/ListSectors";
import { type TopItemModifier } from "@/_types/Sectors/ListSectors";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

export const modifierTop = {
  visible: css`
    max-height: 500px;
  `,
  hidden: css`
    max-height: 0;
    padding: 0;
  `
};

const modifierModal = {
  open: css`
    opacity: 1;
    .container__box {
      transform: scale(1);
    }
  `,
  close: css`
    opacity: 0;
    visibility: hidden;
    transition-delay: 0.2s;
    .container__box {
      transform: scale(0.3);
    }
  `
};

export const ContainerListSectors = styled.div<ListSectorsModifier>`
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 2;
  transition: all 0.2s;
  .container__box {
    background-color: ${colors.WHITE};
    border-radius: 16px;
    transition: all 0.2s;
    transition-delay: 0.1s;
    border-radius: 16px;
    width: 700px;
    .box__search {
      position: relative;
      display: flex;
      justify-content: flex-end;
      .search__icon {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 12px;
      }
      .search__input {
        padding: 14px 60px 14px 45px;
        border-radius: 16px 16px 0 0;
        width: 100%;
        border: transparent;
        border-bottom: 1px solid ${colors.GRAY_LIGHT};
        color: ${colors.DARK_PRIMARY};
        font-size: ${pxToRem(16)};
        ::placeholder {
          color: ${colors.GRAY_PRIMARY};
        }
      }
      .search__close {
        display: flex;
        align-items: center;
      }
    }
  }
  ${({ isShow }) => (isShow ? modifierModal.open : modifierModal.close)}
`;

export const TopDefault = styled.div<TopItemModifier>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
  transition: all 0.4s;
  overflow: hidden;
  .top__title {
    color: ${colors.GRAY_SECONDARY};
    font-size: ${pxToRem(14)};
    font-weight: 400;
  }
  ${({ isVisible }) => modifierTop[isVisible ? "visible" : "hidden"]};
`;
