import React from "react";
import Fuse from "fuse.js";
import { Field } from "react-final-form";
import { ContainerInputSelect } from "./style";
import { type InputSelectProps } from "@/_types/InputSelect";
import { TextWarning } from "../TextInput/style";
import { Options } from "./Partials/Options";

export function InputSelect({
  label,
  name,
  classNameInput = "",
  placeholder,
  className,
  form,
  data,
  disabled = false,
  isAwaiting = false,
  onChange,
  direction = "center"
}: InputSelectProps): JSX.Element {
  const [isShowOptions, setIsShowOptions] = React.useState(false);
  const [currentData, setCurrentData] = React.useState<
    Array<{
      id: number;
      name: string;
    }>
  >([]);
  const searchRef = React.useRef<HTMLInputElement>(null);
  const shouldRenderItems = currentData.length > 0;
  const shouldDisable = isAwaiting || disabled;
  const existOnChange = typeof onChange === "function";
  const optionsToSearch = {
    keys: ["name"]
  };
  const fuse = new Fuse(data, optionsToSearch);

  React.useEffect(() => {
    setCurrentData(data);
  }, [data]);

  function onShowOptions(): void {
    setIsShowOptions(true);
    searchRef.current?.focus();
  }

  function onCloseOptions(): void {
    setIsShowOptions(false);
    setCurrentData(data);
    if (searchRef.current !== null) {
      searchRef.current.value = "";
    }
  }

  function getTextLabel(value: number): string {
    return data.find(item => item.id === value)?.name ?? "";
  }

  function onSearch(value: string): void {
    const resultSearch = fuse.search(value);
    const resultData = value.length > 0 ? resultSearch.map(e => e.item) : data;
    setCurrentData(resultData);
  }

  function onSelectItem(id: number): void {
    if (existOnChange) {
      onChange();
    }
    form.change(name, id);
    onCloseOptions();
  }

  function onChangeInput({ value }: { value: string }): void {
    onSearch(value);
  }

  return (
    <Field
      name={name}
      render={({ input, meta }) => {
        const isInvalid: boolean =
          meta.error !== undefined && meta.touched === true;
        const existInputValue = input.value.toString().length > 0;
        const showTextValue = existInputValue
          ? getTextLabel(Number(input.value))
          : placeholder;
        return (
          <ContainerInputSelect
            className={className}
            error={isInvalid}
            isPlaceholder={!existInputValue}
          >
            <span className="input__label">{label}</span>
            <input type="hidden" autoComplete="off" id={name} {...input} />
            <button
              type="button"
              className={`view__text ${classNameInput}`}
              onClick={onShowOptions}
              onFocus={onShowOptions}
              disabled={shouldDisable}
            >
              <p className="input__text">{showTextValue}</p>
            </button>
            <Options
              direction={direction}
              isVisible={isShowOptions}
              shouldRenderItems={shouldRenderItems}
              searchRef={searchRef}
              currentData={currentData}
              onChangeInput={onChangeInput}
              onCloseOptions={onCloseOptions}
              onSelectItem={onSelectItem}
            />
            <TextWarning show={isInvalid}>{meta.error}</TextWarning>
          </ContainerInputSelect>
        );
      }}
    />
  );
}
