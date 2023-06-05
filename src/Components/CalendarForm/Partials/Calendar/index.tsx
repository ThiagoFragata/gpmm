import React from "react";
import { ContainerCalendar } from "./style";
import { IconButton } from "@/Components/IconButton";
import { NAME_DAYS } from "@/_utils/constants";

export function Calendar(): JSX.Element {
  const nameDays = NAME_DAYS.short;

  // passar para a logica depois
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const day = currentDate.getDate();

  const lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0);
  const amountDaysInCurrentMonth = lastDayOfCurrentMonth.getDate();
  const daysOfCurrentMonth = Array.from(
    { length: amountDaysInCurrentMonth },
    (_, index) => index + 1
  );
  //  const weekdayIndex = currentDate.getDay() + 1;
  //   nameDays[weekdayIndex] //

  const getFirstDayCurrentMonth = new Date(currentYear, currentMonth, 1);
  const firstDayCurrentMonth = getFirstDayCurrentMonth.getDay();
  const amountDaysMonthPrevious =
    firstDayCurrentMonth === 0 ? 7 : firstDayCurrentMonth;

  // adicionar deslocamento inicial
  const daysMonthPrevious = Array.from(
    { length: amountDaysMonthPrevious },
    _ => ""
  );
  return (
    <ContainerCalendar>
      <div className="calendar__header">
        <IconButton name="ArrowIcon" direction="left" />
        <button type="button" className="header__title">
          Maio 2023
        </button>
        <IconButton name="ArrowIcon" />
      </div>
      <ul className="calendar__names">
        {nameDays.map((item, index) => (
          <li key={index} className="names__day">
            {item}
          </li>
        ))}
      </ul>
      <ul className="calendar__days">
        {daysMonthPrevious.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {daysOfCurrentMonth.map((item, index) => {
          const isCurrentDay = day === item;
          const classSelected = isCurrentDay ? "text__button--selected" : "";
          return (
            <li key={index}>
              <button
                type="button"
                className="day__button"
                disabled={isCurrentDay}
              >
                <p className={`text__button ${classSelected}`}>{item}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </ContainerCalendar>
  );
}
