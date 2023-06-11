/* eslint-disable @typescript-eslint/await-thenable */
import React from "react";
import { type useSideBarData } from "@/_types/LayoutDashboard";
import { useRouter } from "next/router";
import { NAME_COOKIE_LOGIN, PATHS } from "@/_utils/constants";
import nookies, { destroyCookie } from "nookies";
import axios from "axios";

export function useSideBar(): useSideBarData {
  const router = useRouter();
  const currentPath = router?.pathname;
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  function checkPathSelected(arrayPath: string[]): boolean {
    const isExistInArray = arrayPath.some(
      item => item === String(currentPath).replace("[id]", "")
    );
    return isExistInArray;
  }

  function onHandlerDialogModal(): void {
    setIsOpenModal(!isOpenModal);
  }

  async function onLogout(): Promise<void> {
    // try {
    //   await axios.get("/api/logOut");
    // setIsLoading(true);
    destroyCookie({}, NAME_COOKIE_LOGIN, { path: "/" });
    router.push(PATHS.login);
    // setTimeout(() => {
    //   setIsLoading(false);\
    //   window.location.href = "/";
    // }, 1000);
    //   nookies.set({ res }, 'sbsToken', '', {
    //     maxAge: -1,
    //     path: '/',
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    // })
    // router.push(PATHS.login);
    //
    // setTimeout(() => {
    //   setIsLoading(false);
    //
    // }, 1000);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return {
    checkPathSelected,
    onHandlerDialogModal,
    onLogout,
    isOpenModal
  };
}
