import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerSteps = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  .step {
    height: 5px;
    border-radius: 3px;
    flex: 0.4;
  }
  .step--selected {
    background-color: ${colors.GREEN_PRIMARY};
  }
  .step--unselected {
    background-color: ${colors.GRAY_LIGHT};
  }
`;
