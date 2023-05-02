import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerBreadCrumb = styled.div`
  display: flex;
  column-gap: 6px;
  align-items: center;

  .breadcrumb__item {
    font-size: ${pxToRem(16)};
    transition: all 0.3s;
    padding: 0;
    padding: 6px 0;
  }

  .breadcrumb__item--link {
    position: relative;
    ::before {
      content: "";
      transition: all 0.2s;
      position: absolute;
      bottom: 1px;
      left: 0;
      width: 0;
      height: 0;
      background-color: ${colors.GREEN_PRIMARY};
    }
    :hover {
      color: ${colors.GREEN_PRIMARY};
      ::before {
        width: 100%;
        height: 1px;
      }
    }
  }

  .breadcrumb__item--normal {
    font-weight: 600;
    color: ${colors.GRAY_SECONDARY};
  }

  .breadcrumb__item--last {
    font-weight: 700;
    color: ${colors.GREEN_PRIMARY};
  }

  .breadcrumb__icon:last-child {
    display: none;
  }
`;
