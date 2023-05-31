import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

const modifier = {
  open: css`
    opacity: 1;
    .modal__box {
      transform: scale(1);
    }
  `,
  close: css`
    opacity: 0;
    visibility: hidden;
    transition-delay: 0.2s;
    .modal__box {
      transform: scale(0.5);
    }
  `
};

export const ContainerDialogModal = styled.div<{ isOpen: boolean }>`
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 2;
  transition: all 0.2s;
  .modal__box {
    background-color: ${colors.WHITE};
    border-radius: 16px;
    transition: all 0.2s;
    transition-delay: 0.1s;
    max-width: 700px;
    .box__top {
      border-radius: 16px 16px 0 0;
      padding: 32px 32px 40px;
      display: flex;
      column-gap: 16px;
      .top__icon {
        width: 32px;
        height: 32px;
      }
      .box__title {
        font-size: ${pxToRem(20)};
        color: ${colors.DARK_PRIMARY};
        font-weight: 700;
      }
      .box__description {
        margin-top: 8px;
        font-size: ${pxToRem(16)};
        color: ${colors.GRAY_SECONDARY};
      }
    }
    .box__buttons {
      padding: 12px 32px;
      border-radius: 0 0 16px 16px;
      background-color: ${colors.BACKGROUND_PRIMARY};
      display: flex;
      justify-content: flex-end;
      column-gap: 16px;
    }
  }
  ${({ isOpen }) => (isOpen ? modifier.open : modifier.close)}
`;
