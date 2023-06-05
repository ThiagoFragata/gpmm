import React from "react";
import { ContainerTimes } from "./style";
import { HOURS__AVAILABLE } from "@/_utils/constants";
import { ContentScroll } from "@/Components/ContentScroll";
import { type TimesProps } from "@/_types/CalendarForm";
import { useTimes } from "./useTimes";

export function Times({ reservedHoursDay }: TimesProps): JSX.Element {
  const { checkStatusTime, onSelectItem } = useTimes({ reservedHoursDay });
  return (
    <ContainerTimes>
      <ContentScroll className="time__scroll">
        <div className="time__map">
          <ul>
            {HOURS__AVAILABLE.map(({ id, value }) => (
              <li key={id} className="time__box">
                {value}
              </li>
            ))}
          </ul>
          <ul>
            {HOURS__AVAILABLE.map(({ id, value }) => {
              const { disabledButton, classStatus, label } =
                checkStatusTime(value);
              return (
                <li
                  key={id}
                  className="time__box"
                  onClick={() => {
                    onSelectItem(value);
                  }}
                >
                  <button
                    type="button"
                    className={classStatus}
                    disabled={disabledButton}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </ContentScroll>
    </ContainerTimes>
  );
}
