import React from "react";
import type { SideBarProps } from "@/_types/LayoutDashboard";
import { ContainerSideBar, TitleDivider } from "./style";
import { ITEMS__SIDEBAR } from "../options";
import { useSideBar } from "./useSideBar";
import Link from "next/link";
import Image from "next/image";
import { DialogModal } from "@/Components";

export function SideBar({
  isExpanded,
  onHandlerExpand
}: SideBarProps): JSX.Element {
  const { onHandlerDialogModal, isOpenModal, checkPathSelected } = useSideBar();
  return (
    <ContainerSideBar isExpanded={isExpanded}>
      <DialogModal
        title="Deseja realmente sair?"
        description="Ao realizar esta ação, será solicitado o login novamente para acessar o sistema."
        onActionConfirm={() => {
          alert("quero sair");
        }}
        isOpen={isOpenModal}
        ocActionCancel={onHandlerDialogModal}
        titleActionCancel="Não"
        titleActionConfirm="Sim"
      />
      <Image
        src="/images/logo.png"
        alt="Logo da aplicação"
        width={137}
        height={55}
        className="side__logo"
      />
      <ul className="side__options">
        <li className="option__item">
          <TitleDivider className="option__title">Principal</TitleDivider>
        </li>
        {ITEMS__SIDEBAR.MAIN.map(({ id, label, path, paths, icon: Icon }) => {
          const shouldSelectTab = checkPathSelected(paths);
          const classOptionLink = shouldSelectTab
            ? "option__link option__link--selected"
            : "option__link";
          return (
            <li key={id} className="option__item">
              <Link href={path} className={classOptionLink}>
                <Icon className="option__icon" />
                <span className="option__text">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="side__options">
        <li className="option__item">
          <TitleDivider className="option__title">Outros</TitleDivider>
        </li>
        <li className="option__item">
          <Link href={ITEMS__SIDEBAR.ABOUT.path} className="option__link">
            <ITEMS__SIDEBAR.ABOUT.icon className="option__icon" />
            <span className="option__text">{ITEMS__SIDEBAR.ABOUT.label}</span>
          </Link>
        </li>
        <li className="option__item">
          <button
            type="button"
            className="option__link option__link--button"
            onClick={onHandlerDialogModal}
          >
            <ITEMS__SIDEBAR.CLOSE.icon className="option__icon" />
            <span className="option__text">{ITEMS__SIDEBAR.CLOSE.label}</span>
          </button>
        </li>
      </ul>
      <ul className="side__options side__options--end">
        <li className="option__item">
          <button
            type="button"
            className="option__link option__link--button"
            onClick={onHandlerExpand}
          >
            <ITEMS__SIDEBAR.EXPAND.icon className="option__icon option__icon--expand" />
            <span className="option__text">{ITEMS__SIDEBAR.EXPAND.label}</span>
          </button>
        </li>
      </ul>
    </ContainerSideBar>
  );
}
