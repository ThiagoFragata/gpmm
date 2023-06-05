import React from "react";
import { ContainerCalendarForm } from "./style";
import { type CalendarFormProps } from "@/_types/CalendarForm";
import { Times } from "./Partials/Times";

export function CalendarForm({
  className,
  reservedHoursDay
}: CalendarFormProps): JSX.Element {
  return (
    <ContainerCalendarForm className={className}>
      <Times reservedHoursDay={reservedHoursDay} />
    </ContainerCalendarForm>
  );
}
