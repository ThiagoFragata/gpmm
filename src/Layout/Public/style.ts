import { colors } from "@/style/theme";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const directionAnimation = keyframes`
  0% {
    top: 0;
    left: 0;
  }
  50% {
    top: 50px;
    left: 50px;
  }
  100% {
    top: 0;
    left: 0;
  }
`;

export const ContainerPublic = styled.section`
  height: 100vh;
  display: flex;
  /* padding: 20px; */
  justify-content: space-between;
  background-color: ${colors.BACKGROUND_PRIMARY};
  .public__children {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 350px;
    max-width: 380px;
    margin: auto;
    max-height: 100vh;
    overflow: auto;
  }
  .public__side {
    background-image: url("/images/side.png");
    background-color: ${colors.GREEN_PRIMARY};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 20px 0 0 20px; */
    column-gap: 20px;
    .side__bar {
      display: block;
      width: 40px;
      height: 150px;
      background-color: ${colors.WHITE};
      border-radius: 20px;
      position: relative;
      transform: rotate(30deg);
      /* animation: ${rotateAnimation} 3s ease-in-out infinite; */
      z-index: 2;
      ::after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 40px;
        height: 150px;
        background-color: ${colors.GRAY_PRIMARY};
        border-radius: 20px;
        top: 30px;
        left: 51px;
        /* animation: ${directionAnimation} 3s ease-in-out infinite; */
      }
    }
  }
`;
