import React from "react";
import { ContainerCalendarForm } from "./style";
import { type CalendarFormProps } from "@/_types/CalendarForm";
import { Times } from "./Partials/Times";

export function CalendarForm({
  onSelectHours,
  setSelectedTimes,
  disabled,
  selectedTimes,
  className,
  reservedHoursDay,
  typeCalendar = "register"
}: CalendarFormProps): JSX.Element {
  return (
    <ContainerCalendarForm className={className}>
      <Times
        typeCalendar={typeCalendar}
        disabled={disabled}
        setSelectedTimes={setSelectedTimes}
        selectedTimes={selectedTimes}
        reservedHoursDay={reservedHoursDay}
        onSelectHours={onSelectHours}
      />
    </ContainerCalendarForm>
  );
}
