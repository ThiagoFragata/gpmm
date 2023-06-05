import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import {
  type checkStatusTimeData,
  type useTimesData,
  type useTimesProps
} from "@/_types/CalendarForm";
import { getDivision30Minutes } from "@/_utils/treatAvailability";
import React from "react";
import { useDispatch } from "react-redux";

export function useTimes({ reservedHoursDay }: useTimesProps): useTimesData {
  const dispatch = useDispatch();
  const [selectedTimes, setSelectedTimes] = React.useState<string[]>([]);

  function checkStatusTime(value: string): checkStatusTimeData {
    const isReserved = reservedHoursDay.some(item => item === value);

    if (isReserved) {
      return {
        disabledButton: true,
        classStatus: "button__box button__box--reserved",
        label: "Ocupado"
      };
    }

    const isSelected = selectedTimes.some(item => item === value);

    if (isSelected) {
      return {
        disabledButton: false,
        classStatus: "button__box button__box--selected",
        label: "Selecionado"
      };
    }
    return {
      disabledButton: false,
      classStatus: "button__box button__box--available",
      label: "Disponível"
    };
  }

  function onSelectItem(value: string): void {
    if (selectedTimes.length === 0) {
      setSelectedTimes([value]);
      return;
    }

    const isExistInArray = selectedTimes.some(item => item === value);

    const updatedArray = isExistInArray
      ? selectedTimes.filter(time => time !== value)
      : [...selectedTimes, value];

    console.log(JSON.stringify(updatedArray, null, 2));

    const nextHoursItens = updatedArray.map(obj => obj);
    const start = nextHoursItens.reduce(
      (min, val) => (val < min ? val : min),
      nextHoursItens[0]
    );
    const end = nextHoursItens.reduce(
      (max, val) => (val > max ? val : max),
      nextHoursItens[0]
    );

    const isSelectedBefore = value < end;
    const _end = isSelectedBefore ? value : end;
    const formatted = getDivision30Minutes({
      start: `2023-06-05T${start}:00`,
      end: `2023-06-05T${_end}:00`
    });

    const isExistSelectedHoursInReserved = formatted.some(item =>
      reservedHoursDay.includes(item)
    );

    if (isExistSelectedHoursInReserved) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "warning",
          title: "Atenção",
          description:
            "Você não pode escolher um intervalo com horário ocupado."
        })
      );
      return;
    }
    setSelectedTimes(formatted);
  }

  return {
    checkStatusTime,
    onSelectItem
  };
}
