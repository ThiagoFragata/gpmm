import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerIconButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  :hover {
    background-color: ${colors.BACKGROUND_PRIMARY};
  }
  :disabled {
    opacity: 0.6;
    cursor: no-drop;
  }
`;
