import styled from "styled-components";
import { colors } from "@/style/theme";

export const ContainerLayoutPublic = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.BACKGROUND_PRIMARY};
  .public__children {
    padding: 0 20px;
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
    background-size: cover;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    .side__bar {
      display: block;
      width: 40px;
      height: 150px;
      background-color: ${colors.WHITE};
      border-radius: 20px;
      position: relative;
      transform: rotate(30deg);
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
      }
    }
  }
`;
