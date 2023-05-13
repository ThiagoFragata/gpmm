import React from "react";
import { ContainerTabResources } from "./style";
import { useTabResources } from "./useTabResources";
import type { TabResourcesProps } from "@/_types/TabResources";

export function TabResources({
  onChange,
  currentTab
}: TabResourcesProps): JSX.Element {
  const { optionsTab } = useTabResources();

  return (
    <ContainerTabResources>
      {optionsTab.map(item => {
        const isSelected = item.id === currentTab;
        const classButton = isSelected
          ? "resource__button resource__button--selected"
          : "resource__button";
        return (
          <button
            type="button"
            key={item.id}
            className={classButton}
            onClick={() => {
              onChange(item.id);
            }}
          >
            {item.label}
          </button>
        );
      })}
      <span
        className={`resource__line resource__line--position-${currentTab}`}
      />
    </ContainerTabResources>
  );
}
