import styled from "styled-components";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";

export const ContainerLogin = styled.section`
  width: 100%;
  .login__fields {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    row-gap: 12px;
    .login__password {
      padding-right: 40px;
    }
  }
  .login__buttons {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    row-gap: ${pxToRem(12)};
    .link__forgot {
      transition: all 0.3s;
      font-size: ${pxToRem(16)};
      color: ${colors.GRAY_PRIMARY};
      padding-bottom: 2px;
      border-bottom: 1px solid transparent;
      text-decoration: none;
      margin-bottom: 10px;
      :hover {
        color: ${colors.GREEN_PRIMARY};
        border-bottom: 1px solid ${colors.GREEN_PRIMARY};
      }
    }
    .button__item {
      width: 100%;
    }
  }
  .link__text {
    transition: all 0.3s;
    font-size: ${pxToRem(16)};
    color: ${colors.GRAY_PRIMARY};
    padding-bottom: 2px;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    margin-top: 20px;
    .link__strong {
      font-weight: 600;
      color: ${colors.GREEN_PRIMARY};
      :hover {
        color: ${colors.GREEN_PRIMARY};
        border-bottom: 1px solid ${colors.GREEN_PRIMARY};
      }
    }
  }
`;
