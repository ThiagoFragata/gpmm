import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerSearch = styled.div`
  position: relative;
  .search__text {
    border: 1px solid ${colors.GRAY_PRIMARY};
    color: ${colors.DARK_PRIMARY};
    font-size: ${pxToRem(16)};
    transition: all 0.3s;
    border-radius: 12px;
    padding: 10px 12px 10px 35px;
    width: 350px;
    position: sticky;
    background-color: transparent;
    z-index: 1;
    ::placeholder {
      color: ${colors.GRAY_PRIMARY};
    }
    :disabled {
      opacity: 0.5;
    }
    :focus {
      border: 1px solid ${colors.GREEN_PRIMARY};
    }
  }
  .search__icon {
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 22px;
    height: 22px;
  }
`;
