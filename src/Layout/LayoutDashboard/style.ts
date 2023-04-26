import styled, { css } from "styled-components";
import {
  widthSideBarExpanded,
  widthSideBarRetractable
} from "@/_utils/constants";
import type { LayoutDashboardModifier } from "@/_types/LayoutDashboard";

const modifier = {
  sidebar: {
    expand: css`
      border: 2px solid blue;
      width: calc(100% - ${widthSideBarExpanded}px);
    `,
    retractable: css`
      border: 2px solid red;
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
    ${({ isExpanded }) =>
      modifier.sidebar[isExpanded ? "expand" : "retractable"]}
  }
`;
