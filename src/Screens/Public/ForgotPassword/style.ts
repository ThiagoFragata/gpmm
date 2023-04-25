import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  .login__fields {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
  .login__buttons {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    row-gap: ${pxToRem(12)};
    .button__item {
      width: 100%;
    }
    .button__divider {
      text-align: center;
      position: relative;
      color: ${colors.DARK_PRIMARY};
      font-size: ${pxToRem(16)};
      ::after,
      ::before {
        content: "";
        top: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
        height: 1px;
        width: 43%;
        background-color: ${colors.DARK_PRIMARY};
      }

      ::before {
        right: 0;
      }
      ::after {
        left: 0;
      }
    }
  }
`;
