import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerContentScroll = styled.div`
  flex: 1;
  position: relative;
  width: calc(100% + 12px);
  .scroll {
    padding-right: 10px;
    padding-left: 1px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto !important;
    padding-bottom: 10px;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.GRAY_LIGHT};
      border-radius: 10px;
    }
  }
`;
