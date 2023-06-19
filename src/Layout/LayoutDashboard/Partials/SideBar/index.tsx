import React from "react";
import type { SideBarProps } from "@/_types/LayoutDashboard";
import { ContainerSideBar, TitleDivider } from "./style";
import { useSideBar } from "./useSideBar";
import Link from "next/link";
import Image from "next/image";
import { DialogModal } from "@/Components";
import {
  type ITEMS_MAIN,
  ITEMS_SIDEBAR_ADMIN,
  ITEMS_SIDEBAR_NORMAL
} from "../options";
import { getSession } from "next-auth/react";

export function SideBar({
  isExpanded,
  onHandlerExpand
}: SideBarProps): JSX.Element {
  const {
    isOpenModal,
    isAbout,
    onHandlerDialogModal,
    checkPathSelected,
    onLogout
  } = useSideBar();
  const [optionsSideBar, setOptionsSideBar] =
    React.useState(ITEMS_SIDEBAR_NORMAL);

  const initGetLayoutProfile = React.useCallback(async () => {
    const session = await getSession();
    const currentOptionsideBar =
      session?.user_type === "NORMAL"
        ? ITEMS_SIDEBAR_NORMAL
        : ITEMS_SIDEBAR_ADMIN;
    setOptionsSideBar(currentOptionsideBar);
  }, []);

  React.useEffect(() => {
    initGetLayoutProfile();
  }, []);

  return (
    <ContainerSideBar isExpanded={isExpanded}>
      <DialogModal
        title="Deseja realmente sair?"
        description="Ao realizar esta ação, será solicitado o login novamente para acessar o sistema."
        onActionConfirm={onLogout}
        isOpen={isOpenModal}
        ocActionCancel={onHandlerDialogModal}
        titleActionCancel="Não"
        titleActionConfirm="Sim"
        variant="danger"
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
        {optionsSideBar.MAIN.map((item: ITEMS_MAIN) => {
          const shouldSelectTab = checkPathSelected(item?.paths);
          const Icon = item?.icon;
          const classOptionLink = shouldSelectTab
            ? "option__link option__link--selected"
            : "option__link";
          return (
            <li key={item?.id} className="option__item">
              <Link href={item?.path} className={classOptionLink}>
                <Icon className="option__icon" />
                <span className="option__text">{item?.label}</span>
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
          <Link
            href={optionsSideBar.ABOUT.path}
            className={`${
              isAbout ? "option__link--selected" : ""
            } option__link`}
          >
            <optionsSideBar.ABOUT.icon className="option__icon" />
            <span className="option__text">{optionsSideBar.ABOUT.label}</span>
          </Link>
        </li>
        <li className="option__item">
          <button
            type="button"
            className="option__link option__link--button"
            onClick={onHandlerDialogModal}
          >
            <optionsSideBar.CLOSE.icon className="option__icon" />
            <span className="option__text">{optionsSideBar.CLOSE.label}</span>
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
            <optionsSideBar.EXPAND.icon className="option__icon option__icon--expand" />
            <span className="option__text">{optionsSideBar.EXPAND.label}</span>
          </button>
        </li>
      </ul>
    </ContainerSideBar>
  );
}
