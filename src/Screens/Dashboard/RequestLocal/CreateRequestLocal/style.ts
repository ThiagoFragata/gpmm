import { ContainerDashboard } from "@/style/shareStyle";
import styled from "styled-components";

export const ContainerCreateRequestLocal = styled(ContainerDashboard)`
  .items__fields {
    margin-top: 32px;
    .field__goal {
      grid-column: 2 / span 2;
    }
  }
  .item__divider {
    margin-top: 50px;
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
