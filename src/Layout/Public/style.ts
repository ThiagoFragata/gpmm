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
    animation-play-state: paused;
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

export const ContainerPublic = styled.main`
  border: 2px solid red;
  height: 100vh;
  .public__side {
    background-image: url("/images/side.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 80%;
    width: 100%;
    display: flex;
    /* border: 2px solid red;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    .side__bar {
      width: 40px;
      height: 150px;
      background-color: purple;
      border-radius: 15px;
      position: relative;
      transform: rotate(30deg);
      z-index: 2;
      ::before {
        z-index: -1;
        content: "";
        position: absolute;
        width: 40px;
        height: 150px;
        background-color: gray;
        border-radius: 15px;
        animation: ${directionAnimation} 3s ease-in-out infinite;
      }
      animation: ${rotateAnimation} 3s ease-in-out infinite;
    } */
  }
`;
