import React from "react";
import { type useSideBarData } from "@/_types/LayoutDashboard";
import { useRouter } from "next/router";
import { NAME_COOKIE_LOGIN, PATHS } from "@/_utils/constants";
import { destroyCookie } from "nookies";

export function useSideBar(): useSideBarData {
  const router = useRouter();
  const currentPath = router?.pathname;
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  function checkPathSelected(arrayPath: string[]): boolean {
    const isExistInArray = arrayPath.some(
      item => item === String(currentPath).replace("[id]", "")
    );
    return isExistInArray;
  }

  function onHandlerDialogModal(): void {
    setIsOpenModal(!isOpenModal);
  }

  function onLogout(): void {
    destroyCookie(null, NAME_COOKIE_LOGIN);
    router.push(PATHS.login);
  }

  return {
    checkPathSelected,
    onHandlerDialogModal,
    onLogout,
    isOpenModal
  };
}
