import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerButtonChangeInput = styled.button`
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 6px;
  top: 0;
  bottom: 0;
  margin: auto;
  border: none;
  background-color: transparent;
  .button__icon {
    width: 18px;
    height: 18px;
    flex-grow: 0;
  }
  :hover {
    background-color: ${colors.BACKGROUND_PRIMARY};
  }
`;
