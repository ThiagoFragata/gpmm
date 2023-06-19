import { pxToRem } from "@/_utils/pxToRem";
import { ContainerDashboard } from "@/style/shareStyle";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerAbout = styled(ContainerDashboard)`
  .about__title {
    color: ${colors.DARK_PRIMARY};
    font-weight: 600;
    font-size: ${pxToRem(25)};
  }
  .about__image {
    margin: 30px 0;
  }
  .about__body {
    display: flex;
    column-gap: 32px;
    .about__subtitle {
      color: ${colors.DARK_PRIMARY};
      font-weight: 500;
      font-size: ${pxToRem(18)};
      margin-bottom: 15px;
    }
    .about__text {
      color: ${colors.GRAY_SECONDARY};
      font-size: ${pxToRem(18)};
    }
    .about__list {
      list-style: disc;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      row-gap: 6px;
      .about__text {
        margin: 0;
      }
    }
    .body__left,
    .body__right {
      display: flex;
      row-gap: 26px;
      flex-direction: column;
      width: 50%;
    }
  }
`;
