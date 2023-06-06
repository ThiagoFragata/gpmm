import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import {
  type checkStatusTimeData,
  type useTimesData,
  type useTimesProps
} from "@/_types/CalendarForm";
import { getDivision30Minutes } from "@/_utils/treatAvailability";
import { useDispatch } from "react-redux";

export function useTimes({
  selectedTimes,
  reservedHoursDay,
  setSelectedTimes,
  onSelectHours
}: useTimesProps): useTimesData {
  const dispatch = useDispatch();
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

    const isOnlyTowItens = formatted.length === 2;
    let _formatted: string[] = formatted;
    if (isOnlyTowItens) {
      if (formatted[0] === formatted[1]) {
        _formatted = [formatted[0]];
      }
    }

    onSelectHours(
      _formatted.length > 0
        ? {
            start,
            end: _end
          }
        : null
    );
    setSelectedTimes(_formatted);
  }

  return {
    checkStatusTime,
    onSelectItem
  };
}
