import styled, { css } from "styled-components";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";

export const ContainerFirstAccess = styled.section`
  max-width: 1920px;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2px 32px 0;
  .top__bar {
    padding-top: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .top__login {
      transition: all 0.3s;
      font-size: ${pxToRem(16)};
      color: ${colors.GRAY_PRIMARY};
      padding-bottom: 2px;
      border-bottom: 1px solid transparent;
      text-decoration: none;
      :hover {
        color: ${colors.GREEN_PRIMARY};
        border-bottom: 1px solid ${colors.GREEN_PRIMARY};
      }
    }
  }
  .box__form {
    position: relative;
    flex: 1;
  }
`;

const modifier = {
  box: {
    visible: css`
      transform: scale(1);
      max-height: none;
    `,
    hidden: css`
      bottom: -100vh;
      max-width: 0;
      max-height: 0;
      transform: scale(0);
    `
  }
};

export const ContainerBoxScreen = styled.div<{ isCurrentScreen: boolean }>`
  position: absolute;
  margin: auto;
  width: 100%;
  max-width: 600px;
  height: fit-content;
  left: 0;
  right: 0;
  top: 0;
  transition: all 0.7s;
  bottom: 0;
  .resend__email {
    margin: 16px 0 20px;
    display: flex;
    align-items: center;
    column-gap: 4px;
    .resend__text {
      font-size: ${pxToRem(16)};
      color: ${colors.GRAY_SECONDARY};
    }
    .resend__button {
      cursor: pointer;
      font-weight: 700;
      background-color: transparent;
      border: none;
      color: ${colors.GREEN_PRIMARY};
      font-size: ${pxToRem(16)};
      transition: all 0.2s;
      border-bottom: 1px solid transparent;
      :hover {
        border-bottom: 1px solid ${colors.GREEN_PRIMARY};
      }
    }
  }
  .control__buttons {
    column-gap: 16px;
    display: flex;
    .button__control {
      width: 50%;
    }
  }
  ${({ isCurrentScreen }) =>
    modifier.box[isCurrentScreen ? "visible" : "hidden"]};
  .box__steps {
    margin: 40px 0 30px;
  }
  .box__fields {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    .box__password {
      padding-right: 40px;
    }
  }
  .button__item {
    width: 100%;
    margin-top: 30px;
  }
`;
