import React from "react";
import { DataItems, ShowDatas } from "./style";
import { type OptionsProps } from "@/_types/InputSelect";
import { AboutIcon, SearchIcon } from "@/assets/icons";
import { IconButton } from "@/Components/IconButton";
import { colors } from "@/style/theme";

export function Options({
  isVisible,
  direction,
  shouldRenderItems,
  searchRef,
  currentData,
  onChangeInput,
  onCloseOptions,
  onSelectItem
}: OptionsProps): JSX.Element {
  return (
    <ShowDatas isVisible={isVisible} direction={direction}>
      <div className="datas__header">
        <div className="data__icon-search data__icons">
          <SearchIcon />
        </div>
        <input
          ref={searchRef}
          type="text"
          className="datas__input"
          placeholder="Digite o item buscado"
          onChange={e => {
            onChangeInput({ value: e.target.value });
          }}
          onBlur={() => {
            onCloseOptions();
          }}
        />
        <IconButton
          name="CloseIcon"
          fill={colors.RED_PRIMARY}
          className="data__icons"
        />
      </div>
      <DataItems className="data__items-container container__default">
        {shouldRenderItems ? (
          <div className="item__scroll">
            <ul className="item__table">
              {currentData.map(({ id, name: nameItem }) => (
                <li key={id}>
                  <button
                    type="button"
                    className="item__option"
                    onMouseDown={() => {
                      onSelectItem(id);
                    }}
                  >
                    {nameItem}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="item__not-found">
            <AboutIcon fill={colors.RED_PRIMARY} />
            <h3 className="item__alert">Sem itens para exibir.</h3>
          </div>
        )}
      </DataItems>
    </ShowDatas>
  );
}
