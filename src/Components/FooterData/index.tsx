import React from "react";
import { ContainerFooterData, ContainerNumbers } from "./style";
import { ArrowIcon } from "@/assets/icons";
import { IconButton } from "../IconButton";
import { ShowBack } from "../ShowBack";
import { type FooterDataProps } from "@/_types/FooterData";

export function FooterData({
  onChangePage,
  onChangeSizePage,
  data
}: FooterDataProps): JSX.Element {
  const numbersPage = [5, 10, 20, 30, 40];
  const [isOpen, setIsOpen] = React.useState(false);
  const currentPage = data?.currentPage + 1;
  const shouldDisablePrevPage = currentPage === 1;
  const shouldDisableNextPage = currentPage === data?.totalPages;
  function onHandlerPopUp(): void {
    setIsOpen(!isOpen);
  }

  function onActionChangePage(value: number): void {
    onHandlerPopUp();
    onChangeSizePage(value);
  }

  return (
    <ContainerFooterData>
      <ShowBack isOpen={isOpen} onClose={onHandlerPopUp} />
      <div className="footer__count">
        <p className="footer__text">Exibindo por página</p>
        <ContainerNumbers isOpen={isOpen}>
          <div className="numbers__popup">
            {numbersPage.map((item, index) => (
              <button
                type="button"
                key={index}
                className="numbers__option"
                onClick={() => {
                  onActionChangePage(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="number__current"
            onClick={onHandlerPopUp}
          >
            <p className="footer__text">{data?.totalPerPage}</p>
            <ArrowIcon className="current__icon" />
          </button>
        </ContainerNumbers>
      </div>
      <div className="footer__pagination">
        <p className="footer__text">
          <strong className="footer__text--contrast">{`${currentPage} - ${data?.totalPerPage}`}</strong>{" "}
          de {data?.totalPages}
        </p>
        <div className="footer__control">
          <IconButton
            disabled={shouldDisablePrevPage}
            direction="left"
            name="ArrowIcon"
            onClick={() => {
              onChangePage(data?.currentPage - 1);
            }}
          />
          <IconButton
            disabled={shouldDisableNextPage}
            name="ArrowIcon"
            onClick={() => {
              onChangePage(data?.currentPage + 1);
            }}
          />
        </div>
      </div>
    </ContainerFooterData>
  );
}
