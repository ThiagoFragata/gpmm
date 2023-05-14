import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerTabResources = styled.div`
  display: flex;
  column-gap: 20px;
  position: relative;
  border-bottom: 1px solid ${colors.GREEN_PRIMARY};
  .resource__button {
    width: ${pxToRem(125)};
    padding: 10px 0 15px;
    font-weight: 600;
    font-size: ${pxToRem(16)};
    color: ${colors.DARK_PRIMARY};
    transition: all 0.2s;
    cursor: pointer;
    background-color: transparent;
    border: none;
    :disabled {
      cursor: no-drop;
      /* opacity: 0.5; */
    }
  }
  .resource__button--selected {
    color: ${colors.GREEN_PRIMARY};
    cursor: auto;
  }

  .resource__line {
    position: absolute;
    display: block;
    background-color: ${colors.GREEN_PRIMARY};
    transition: all 0.2s;
    border-radius: 4px;
    width: 0;
    height: 3px;
    bottom: -2px;
  }
  .resource__line--position-1,
  .resource__line--position-2,
  .resource__line--position-3 {
    width: ${pxToRem(125)};
  }

  .resource__line--position-1 {
    left: 0;
  }
  .resource__line--position-2 {
    left: ${pxToRem(145)};
  }
  .resource__line--position-3 {
    left: ${pxToRem(290)};
  }
`;
