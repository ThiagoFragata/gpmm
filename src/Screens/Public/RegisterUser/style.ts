import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerRegisterUser = styled.section`
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
  .form__title {
    font-size: ${pxToRem(25)};
    color: ${colors.GREEN_PRIMARY};
    font-weight: 600;
    margin-bottom: 35px;
  }
  .form__divider {
    margin-bottom: 20px;
  }
  .box__form {
    position: relative;
    flex: 1;
    overflow: auto;
    padding-bottom: 10px;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.GRAY_LIGHT};
      border-radius: 10px;
    }
  }
`;

export const ContainerBoxScreen = styled.div`
  margin: auto;
  width: 100%;
  max-width: 600px;
  .box__fields {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    .box__password {
      padding-right: 40px;
    }
    .use__terms {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      .term__text {
        font-size: ${pxToRem(15)};
        color: ${colors.GRAY_SECONDARY};
      }
      .term__link {
        text-decoration: none;
        font-weight: 600;
        font-size: ${pxToRem(15)};
        color: ${colors.BLUE_DARK};
      }
    }
  }
  .control__buttons {
    column-gap: 16px;
    margin-top: 30px;
    display: flex;
    .button__control {
      width: 50%;
    }
  }
`;
