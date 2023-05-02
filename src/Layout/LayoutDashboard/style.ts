import styled, { css } from "styled-components";
import {
  widthSideBarExpanded,
  widthSideBarRetractable
} from "@/_utils/constants";
import type { LayoutDashboardModifier } from "@/_types/LayoutDashboard";
import { colors } from "@/style/theme";

const modifier = {
  sidebar: {
    expand: css`
      /* border: 2px solid blue; */
      width: calc(100% - ${widthSideBarExpanded}px);
    `,
    retractable: css`
      /* border: 2px solid red; */
      width: calc(100% - ${widthSideBarRetractable}px);
    `
  }
};

export const ContainerLayoutDashboard = styled.section<LayoutDashboardModifier>`
  display: flex;
  height: 100vh;
  width: 100vw;
  .layout__children {
    transition: all 0.3s;
    background-color: ${colors.BACKGROUND_PRIMARY};
    padding: 30px;
    display: flex;
    flex-direction: column;
    height: 100%;
    ${({ isExpanded }) =>
      modifier.sidebar[isExpanded ? "expand" : "retractable"]}
  }
`;
