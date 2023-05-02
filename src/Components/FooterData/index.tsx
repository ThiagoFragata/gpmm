import React from "react";
import { ContainerFooterData, ContainerNumbers } from "./style";
import { ArrowIcon } from "@/assets/icons";
import { IconButton } from "../IconButton";
import { ShowBack } from "../ShowBack";

export function FooterData(): JSX.Element {
  const numbersPage = [5, 10, 20, 30, 40];
  const [isOpen, setIsOpen] = React.useState(false);

  function onHandlerPopUp(): void {
    setIsOpen(!isOpen);
  }

  return (
    <ContainerFooterData>
      <ShowBack isOpen={isOpen} onClose={onHandlerPopUp} />
      <div className="footer__count">
        <p className="footer__text">Exibindo por página</p>
        <ContainerNumbers isOpen={isOpen}>
          <div className="numbers__popup">
            {numbersPage.map((number, index) => (
              <button type="button" key={index} className="numbers__option">
                {number}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="number__current"
            onClick={onHandlerPopUp}
          >
            <p className="footer__text">10</p>
            <ArrowIcon className="current__icon" />
          </button>
        </ContainerNumbers>
      </div>
      <div className="footer__pagination">
        <p className="footer__text">
          <strong className="footer__text--contrast">1 - 10</strong> de 40
        </p>
        <div className="footer__control">
          <IconButton direction="left" name="ArrowIcon" />
          <IconButton name="ArrowIcon" />
        </div>
      </div>
    </ContainerFooterData>
  );
}
