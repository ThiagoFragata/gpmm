import { ContainerDashboard } from "@/style/shareStyle";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerCreateRequestTransport = styled(ContainerDashboard)`
  .items__fields {
    margin-top: 32px;
    .field__goal {
      grid-column: 2 / span 2;
    }
  }
  .item__divider {
    margin-top: 50px;
  }
  .container__vacancies {
    padding-bottom: 8px;
    border-bottom: 1px solid ${colors.GRAY_LIGHT};
    .vacancies__title {
      margin-bottom: 16px;
    }
    .fields__vacancies {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
  .form__buttons {
    padding-top: 40px;
    padding-bottom: 10px;
  }
  .field__date {
    display: flex;
    gap: 32px;
  }
  .note__text {
    margin-top: 8px;
  }
`;
