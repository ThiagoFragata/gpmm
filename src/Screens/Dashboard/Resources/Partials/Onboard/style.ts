import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ContainerOnboard = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  overflow: hidden;
  .onboard__picture {
    margin-bottom: 20px;
  }
  .onboard__title {
    font-size: ${pxToRem(32)};
    color: ${colors.DARK_PRIMARY};
    font-weight: 500;
    text-align: center;
    z-index: 1;
  }
  .onboard__subtitle {
    font-size: ${pxToRem(16)};
    color: ${colors.DARK_PRIMARY};
    font-weight: 400;
    text-align: center;
    z-index: 1;
  }
  .onboard__buttons {
    display: flex;
    column-gap: 15px;
    z-index: 1;
  }
  .onboard__circle {
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    border: 2px solid ${colors.BACKGROUND_PRIMARY};
    height: 500px;
    width: 500px;
    border-radius: 50%;
    z-index: 0;
    animation: ${rotateAnimation} 4s linear infinite;
    ::before {
      content: "";
      position: absolute;
      top: 30px;
      right: 88px;
      width: 20px;
      height: 20px;
      background-color: ${colors.GREEN_PRIMARY};
      border: 5px solid ${colors.WHITE};
      border-radius: 50%;
    }
  }
`;
