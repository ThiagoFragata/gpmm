import { ChevBottomIcon } from "@/assets/icons";
import { useState } from "react";
import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  options: Option[];
  onChange: (selectedValue: string) => void;
}

export function Select({
  options,
  onChange,
  label = "Ordenação por data"
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("asc");

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <h1>{label}</h1>
      <SelectLabel
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selectedValue !== ""
          ? selectedValue === "asc"
            ? "Crescente"
            : "Decrescente"
          : "Selecione uma opção"}
        <ChevBottomIcon />
      </SelectLabel>
      {isOpen && (
        <OptionList>
          {options.map(option => (
            <OptionItem
              key={option.value}
              onClick={() => {
                handleOptionClick(option.value);
              }}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </SelectContainer>
  );
}
const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  min-width: 120px;

  h1 {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 4px;
  }
`;

const SelectLabel = styled.div`
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 16px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const OptionItem = styled.li`
  cursor: pointer;
  padding: 8px 16px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
